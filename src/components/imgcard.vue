<template>
  <img :src="img_source(index, available)" style="width:100%"/>
  <button 
  @click="onSelect()"
  :class="[available === 2 ? 'bg-amber-300 hover:bg-amber-500' : '',
      'hover:scale-95 hover:text-white',
    ]"
  style="position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: #eee;
  background-color: #0003;
  font-size: 3vw;
  padding: 3vw 5vw;
  cursor: pointer;
  border: dashed"
  :hidden="available==0"
  >{{ day }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Badge from '~/components/badge.vue';

function img_source(n: number, available: number): string {
  let COL_COUNT = 3;
  let row: number = Math.floor((n - 1) / COL_COUNT);
  let col: number = (n-1) % COL_COUNT;
  return (available=== 0 ? "/painting_passive/" : "/painting_oil/") + col + "" +  row + ".png";
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
      required: true,
    }
  },
  methods: {
    img_source,
  }
});
</script>
