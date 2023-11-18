<template>
  <span
    class="inline-flex items-center rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700"
    >{{ value }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: String,
      default: 'New',
    },
  },
});
</script>
