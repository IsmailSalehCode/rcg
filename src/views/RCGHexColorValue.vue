<template>
  <span
    class="pa-1 rounded"
    :style="`color:${outputHexColorStr};background-color:white`"
    >{{ outputHexColorStr }}</span
  >
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { Queue } from "@/utils/Queue";

const { nums, isDelayed } = defineProps({
  nums: {
    type: Array<number>,
    required: true,
  },
  isDelayed: {
    type: Boolean,
    default: false,
  },
});

const delayQueue = new Queue<string>();
const outputHexColorStr = ref<string | null>(null);

const currentNumsHexColorStr = computed(() => {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");
  return `#${toHex(nums[0])}${toHex(nums[1])}${toHex(nums[2])}`;
});

const updateOutput = () => {
  if (!isDelayed) {
    delayQueue.clear();
    outputHexColorStr.value = currentNumsHexColorStr.value;
  } else {
    delayQueue.enqueue(currentNumsHexColorStr.value);
    setTimeout(() => {
      outputHexColorStr.value = delayQueue.dequeue();
    }, 3000);
  }
};

watch(() => nums, updateOutput);

onMounted(() => {
  outputHexColorStr.value = currentNumsHexColorStr.value;
});
// export default {
//   mounted() {
//     this.outputHexColorStr = this.currentNumsHexColorStr;
//   },
//   props: {
//     nums: {
//       type: Array,
//       required: true,
//     },
//     isDelayed: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   data() {
//     return {
//       delayQueue: new Queue(),
//       outputHexColorStr: null,
//     };
//   },
//   watch: {
//     nums() {
//       if (!this.isDelayed) {
//         this.delayQueue.clear();
//         this.outputHexColorStr = this.currentNumsHexColorStr;
//       } else {
//         this.delayQueue.enqueue(this.currentNumsHexColorStr);
//         setTimeout(() => {
//           this.outputHexColorStr = this.delayQueue.dequeue();
//         }, 3000);
//       }
//     },
//   },
//   computed: {
//     currentNumsHexColorStr() {
//       const toHex = (value) => value.toString(16).padStart(2, "0");
//       return `#${toHex(this.nums[0])}${toHex(this.nums[1])}${toHex(
//         this.nums[2]
//       )}`;
//     },
//   },
// };
</script>
