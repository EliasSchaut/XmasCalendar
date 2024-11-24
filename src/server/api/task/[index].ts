const config = useRuntimeConfig();

export default defineEventHandler((event) => {
  let index: number = -1;
  try {
    index = Number(getRouterParam(event, 'index'));
  } catch (e) {
    return 'Invalid index';
  }
  if (index < 1 || index > 24) {
    return 'Index out of range';
  }

  const current_timestamp = Math.floor(Date.now() / 1000);
  // 86400 is the number of seconds in a day
  if ((index - 1) * 86400 + config.start_unix_timestamp > current_timestamp) {
    return 'Task not yet available';
  }

  return config.tasks[index] as string;
});
