<template>
  <div class="controls">
    <div>
      <component
        :is="selectedComponent"
        :nums="nums"
        :isDelayed="delayRendering"
      />
    </div>
    <v-select
      hide-details
      label="View"
      v-model="selectedComponentName"
      :items="componentItems"
      item-title="title"
      item-value="name"
      density="comfortable"
    ></v-select>

    <v-checkbox
      density="comfortable"
      hide-details
      label="Delayed"
      v-model="delayRendering"
    ></v-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Component } from "vue";
import RCGDecimalValues from "./RCGDecimalValues.vue";
import RCGHexColorValue from "./RCGHexColorValue.vue";
import RCGUpdatesControls from "./RCGUpdatesControls.vue";

const { nums } = defineProps({ nums: { type: Array<number>, required: true } });

const selectedComponentName =
  ref<keyof typeof componentMap>("RCGUpdatesControls");
const delayRendering = ref(false);

const componentItems = [
  {
    id: 1,
    name: "RCGDecimalValues",
    title: "Dec Bytes",
  },
  {
    id: 2,
    name: "RCGHexColorValue",
    title: "Hex Colored",
  },
  {
    id: 3,
    name: "RCGUpdatesControls",
    title: "Counter",
  },
];

const componentMap = {
  RCGDecimalValues,
  RCGHexColorValue,
  RCGUpdatesControls,
} as const satisfies Record<string, Component>;

const selectedComponent = computed(
  () => componentMap[selectedComponentName.value]
);
</script>

<style scoped>
.controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
