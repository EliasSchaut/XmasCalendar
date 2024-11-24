const start_unix_timestamp = useRuntimeConfig().start_unix_timestamp;

export default defineEventHandler(() => {
  const current_timestamp = Math.floor(Date.now() / 1000);
  if (current_timestamp < start_unix_timestamp) {
    return start_unix_timestamp - current_timestamp;
  }

  const index =
    Math.floor((current_timestamp - start_unix_timestamp) / 86400) + 1;
  return start_unix_timestamp + index * 86400 - current_timestamp;
});
