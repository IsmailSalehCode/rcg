<template>
  <v-card-text class="py-0">
    Updates Count: {{ countRandomizations }}
  </v-card-text>

  <v-card-actions>
    <v-btn color="warning" @click="resetCountRandomizations"> Reset </v-btn>
  </v-card-actions>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const countRandomizations = ref<number>(0);

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

const updateCounter = (): void => {
  if (!isDelayed) {
    countRandomizations.value += 1;
    return;
  }
  setTimeout(() => {
    countRandomizations.value += 1;
  }, 3000);
};

watch(() => nums, updateCounter);

function resetCountRandomizations(): void {
  countRandomizations.value = 0;
}
// export default {
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
//   watch: {
//     nums() {
//       if (!this.isDelayed) {
//         this.countRandomizations += 1;
//         return;
//       }
//       setTimeout(() => {
//         this.countRandomizations += 1;
//       }, 3000);
//     },
//   },
//   data() {
//     return {
//       countRandomizations: 0,
//     };
//   },
//   methods: {
//     resetCountRandomizations() {
//       this.countRandomizations = 0;
//     },
//   },
// };
</script>
