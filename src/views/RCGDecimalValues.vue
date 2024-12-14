<template>
  <div class="pt-2">
    {{ outputNumsStr }}
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
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
const outputNumsStr = ref<string | null>(null);

const currentNumsStr = computed((): string => {
  return nums.join(" ");
});

const updateOutput = (): void => {
  if (!isDelayed) {
    delayQueue.clear();
    outputNumsStr.value = currentNumsStr.value;
  } else {
    delayQueue.enqueue(currentNumsStr.value);
    setTimeout(() => {
      outputNumsStr.value = delayQueue.dequeue();
    }, 3000);
  }
};

watch(() => nums, updateOutput);

onMounted(() => {
  outputNumsStr.value = currentNumsStr.value;
});
</script>
