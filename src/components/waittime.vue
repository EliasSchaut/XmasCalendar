<template>Next Card in {{ time_left }}</template>

<script setup lang="ts">
let time_left = ref('unknown');
useFetch('/api/task/waittime').then((data) => {
  if (data.data.value === null) return;
  if (data.data.value <= 60) {
    time_left.value = 'under a minute!';
    return;
  }

  const days_left = Math.floor(data.data.value / (60 * 60 * 24));
  const hours_left = Math.floor(
    (data.data.value - days_left * 60 * 60 * 24) / (60 * 60),
  );
  const minutes_left = Math.floor(
    (data.data.value - days_left * 60 * 60 * 24 - hours_left * 60 * 60) / 60,
  );

  time_left.value = `
    ${days_left > 0 ? `${days_left} days` : ``}
    ${hours_left > 0 ? `${hours_left} hours` : ``}
    ${minutes_left > 0 ? `${minutes_left} minutes` : ``}!`;
});
</script>
