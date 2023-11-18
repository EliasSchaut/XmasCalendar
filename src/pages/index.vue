<template>
  <div class="flex-row justify-center">
    <div class="text-3xl font-bold">Xmas Task Calendar</div>
    <Waittime class="text-3xl font-bold" />
  </div>
  <ul
    role="list"
    class="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >
    <li v-for="i in range(1, 25)" :key="i" class="relative">
      <Card :index="i" @click="show(i)" />
    </li>
  </ul>
  <Modal ref="modal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { range } from '@antfu/utils';

export default defineComponent({
  methods: {
    range,
    show(index: number) {
      useFetch('/api/task/' + index).then((data) => {
        this.$refs.modal.show(data.data.value);
      });
    },
  },
});
</script>
