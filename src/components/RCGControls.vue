<template>
  <v-btn color="success" @click="startRand">Start</v-btn>
  <v-btn color="error" @click="stopRand">Stop</v-btn>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits<{
  (e: "generateNums"): void;
}>();

const shouldRandomize = ref(false);
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

function startRand() {
  shouldRandomize.value = true;
}

function stopRand() {
  shouldRandomize.value = false;
}
</script>
