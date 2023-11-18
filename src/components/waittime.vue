<template>Nächste Karte in {{ time_left }}</template>

<script setup lang="ts">
let time_left = ref('unknown');
useFetch('/api/task/waittime').then((data) => {
  if (data.data.value === null) return;

  const hours_left = Math.floor(data.data.value / (60 * 60));
  const minutes_left = Math.floor(
    (data.data.value - hours_left * 60 * 60) / 60,
  );
  time_left.value = `${
    hours_left > 0 ? `${hours_left} Stunden` : ``
  } ${minutes_left} Minuten`;
});
</script>
