import tasks from '~~/tasks';

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
  return tasks[index] as string;
});
