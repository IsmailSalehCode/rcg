<template>
  <div class="pt-2">
    {{ outputNumsStr }}
  </div>
</template>

<script>
import { Queue } from "@/utils/Queue";
export default {
  mounted() {
    this.outputNumsStr = this.currentNumsStr;
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
      outputNumsStr: null,
    };
  },
  watch: {
    nums() {
      if (!this.isDelayed) {
        this.delayQueue.clear();
        this.outputNumsStr = this.currentNumsStr;
      } else {
        this.delayQueue.enqueue(this.currentNumsStr);
        setTimeout(() => {
          this.outputNumsStr = this.delayQueue.dequeue();
        }, 3000);
      }
    },
  },
  computed: {
    currentNumsStr() {
      return this.nums.join(" ");
    },
  },
};
</script>
