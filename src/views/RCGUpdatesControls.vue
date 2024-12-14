<template>
  <v-card-text class="py-0">
    Updates Count: {{ countRandomizations }}
  </v-card-text>

  <v-card-actions>
    <v-btn color="warning" @click="resetCountRandomizations"> Reset </v-btn>
  </v-card-actions>
</template>
<script>
export default {
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
  watch: {
    nums() {
      if (!this.isDelayed) {
        this.countRandomizations += 1;
        return;
      }
      setTimeout(() => {
        this.countRandomizations += 1;
      }, 3000);
    },
  },
  data() {
    return {
      countRandomizations: 0,
    };
  },
  methods: {
    resetCountRandomizations() {
      this.countRandomizations = 0;
    },
  },
};
</script>
