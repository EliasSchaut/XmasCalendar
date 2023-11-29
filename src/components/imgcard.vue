<template>
  <img
    :src="img_source(index, available)"
    style="width: 100%"
    :alt="`Image for door ${day}`"
  />
  <button
    @click="onSelect()"
    :class="[
      available === 2
        ? 'outline-amber-500 hover:bg-amber-500'
        : 'outline-blue-500',
      available === 0 ? 'hidden' : '',
      'absolute left-1/2 top-1/2 h-2/3 w-1/3 -translate-x-1/2 -translate-y-1/2 bg-[#0003] text-2xl font-bold text-[#eee] outline-dashed transition ease-in-out hover:scale-95 hover:text-white',
    ]"
  >
    <Badge v-if="available === 2" class="absolute -right-5 -top-3" animate />
    {{ day }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Badge from '~/components/badge.vue';

function img_source(n: number, available: number): string {
  let COL_COUNT = 3;
  let row: number = Math.floor((n - 1) / COL_COUNT);
  let col: number = (n - 1) % COL_COUNT;
  return (
    (available === 0 ? '/painting_passive/' : '/painting_oil/') +
    col +
    '' +
    row +
    '.png'
  );
}

export default defineComponent({
  components: { Badge },
  setup(props) {
    const available = ref(0);
    useFetch('/api/task/available/' + props.day).then((data) => {
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
    day: {
      type: Number,
      required: true,
    },
    onSelect: {
      type: Function,
      required: true,
    },
  },
  methods: {
    img_source,
  },
});
</script>
