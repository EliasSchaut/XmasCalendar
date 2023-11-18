<template>
  <button
    class="w-full justify-center border-2 border-black bg-blue-300 p-5 align-middle transition ease-in-out hover:scale-95 hover:bg-blue-500 hover:text-white"
  >
    <span class="flex justify-center text-xl font-bold">{{ index }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
});
</script>
