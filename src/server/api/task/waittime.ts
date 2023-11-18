import tasks from '~~/tasks';

export default defineEventHandler(() => {
  const current_timestamp = Math.floor(Date.now() / 1000);
  const index =
    Math.floor((current_timestamp - tasks.start_unix_timestamp) / 86400) + 1;
  return tasks.start_unix_timestamp + index * 86400 - current_timestamp;
});
