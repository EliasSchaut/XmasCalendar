<template>
  <div class="flex flex-col justify-center align-middle">
    <div class="flex flex-col justify-center pb-3 align-middle">
      <div class="m-auto text-3xl font-bold text-gray-100 lg:text-5xl">
        Xmas Task Calendar
      </div>
      <Waittime class="m-auto text-gray-200 lg:text-lg" />
    </div>
    <div class="m-auto">
      <ul class="grid max-w-5xl grid-cols-3">
        <li v-for="i in range(1, 25)" :key="i" class="relative">
          <Imgcard
            :index="i"
            :day="permutation(i)"
            :onSelect="() => show(permutation(i))"
          />
        </li>
      </ul>
    </div>
  </div>
  <Modal ref="modal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { range } from '@antfu/utils';
import tasks from '~~/tasks';

export default defineComponent({
  methods: {
    range,
    show(index: number) {
      useFetch('/api/task/' + index).then((data) => {
        this.$refs.modal.show(data.data.value);
      });
    },
    permutation(i: number): number {
      //permutate 1 to 24.
      return tasks.permutation[i - 1];
    },
  },
});
</script>
