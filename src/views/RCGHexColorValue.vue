<template>
  <span
    class="pa-1 rounded"
    :style="`color:${outputHexColorStr};background-color:white`"
    >{{ outputHexColorStr }}</span
  >
</template>
<script>
import { Queue } from "@/utils/Queue";

export default {
  mounted() {
    this.outputHexColorStr = this.currentNumsHexColorStr;
  },
  props: {
    nums: {
      type: Array,
      required: true,
    },
    isDelayed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      delayQueue: new Queue(),
      outputHexColorStr: null,
    };
  },
  watch: {
    nums() {
      if (!this.isDelayed) {
        this.delayQueue.clear();
        this.outputHexColorStr = this.currentNumsHexColorStr;
      } else {
        this.delayQueue.enqueue(this.currentNumsHexColorStr);
        setTimeout(() => {
          this.outputHexColorStr = this.delayQueue.dequeue();
        }, 3000);
      }
    },
  },
  computed: {
    currentNumsHexColorStr() {
      const toHex = (value) => value.toString(16).padStart(2, "0");
      return `#${toHex(this.nums[0])}${toHex(this.nums[1])}${toHex(
        this.nums[2]
      )}`;
    },
  },
};
</script>
