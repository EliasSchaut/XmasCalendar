const start_unix_timestamp = useRuntimeConfig().start_unix_timestamp;

/**
 * -1: Invalid index
 * 0: Task not yet available
 * 1: Task available
 * 2: Task available today
 */
export default defineEventHandler((event) => {
  let index: number = -1;
  try {
    index = Number(getRouterParam(event, 'index'));
  } catch (e) {
    return -1;
  }
  if (index < 1 || index > 24) {
    return -1;
  }

  // 86400 is the number of seconds in a day
  const current_timestamp = Math.floor(Date.now() / 1000);
  const unlock_timestamp = (index - 1) * 86400 + start_unix_timestamp;
  if (unlock_timestamp <= current_timestamp) {
    if (unlock_timestamp + 86400 > current_timestamp) {
      return 2;
    } else {
      return 1;
    }
  } else {
    return 0;
  }
});
