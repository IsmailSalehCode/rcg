<template>
  <v-btn color="success" @click="runRandomizer(true)">Start</v-btn>
  <v-btn color="error" @click="runRandomizer(false)">Stop</v-btn>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits<{
  (e: "generateNums"): void;
}>();

const shouldRandomize = ref<Boolean>(false);
let intervalId: number | null = null;

watch(shouldRandomize, (newVal) => {
  if (newVal) {
    intervalId = setInterval(() => {
      emit("generateNums");
    }, 1000);
  } else {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
});

function runRandomizer(val: Boolean): void {
  shouldRandomize.value = val;
}
</script>
