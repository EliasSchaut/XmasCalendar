<template>
  <button
    :class="[
      available === 0
        ? 'bg-red-300 hover:bg-red-500'
        : available === 1
          ? 'bg-blue-300 hover:bg-blue-500'
          : 'bg-amber-300 hover:bg-amber-500',
      'w-full justify-center border-2 border-black p-5 align-middle transition ease-in-out hover:scale-95 hover:text-white',
    ]"
  >
    <Badge v-if="available === 2" class="absolute -right-4 -top-3" animate />
    <span class="flex justify-center text-xl font-bold">{{ index }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Badge from '~/components/badge.vue';

export default defineComponent({
  components: { Badge },
  setup(props) {
    const available = ref(0);
    useFetch('/api/task/available/' + props.index).then((data) => {
      if (data.data.value && (data.data.value as number) >= 0) {
        available.value = data.data.value as number;
      }
    });
    return {
      available,
    };
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
});
</script>
