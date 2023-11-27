<template>
  <div class="flex-row justify-center">
    <div class="text-3xl font-bold text-gray-100">Xmas Task Calendar</div>
    <Waittime class="text-gray-200" />
  </div>
  <ul
    class="grid grid-cols-3 justify-space-around"
  >
    <li v-for="i in range(1, 25)" :key="i" class="relative">
      <Imgcard :index="i" :day="permutation(permutation(i))" :onSelect="() => show(permutation(permutation(i)))"/>
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
    permutation(i: number): number {
      //permutate 1 to 24.
      return [13,7,8,4,5,6,21,22,9,10,11,12,16,17,18,19,20,14,15,1,2,3,23,24][i];
    }
  },
});
</script>
