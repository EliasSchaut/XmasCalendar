# XmasTasks
A virtual xmas calender in which you can open 24 doors full of tasks

## Setup
1. You need to have node.js (20.9 or higher) installed on your machine.
2. Clone this repository.
3. Fill `tasks.ts` (see below)
4. Run `npm install` in the root directory of this repository.
5. Run `npm build` in the root directory of this repository.
6. Run `npm start` in the root directory of this repository.

## `tasks.ts`
| Key | Value                                                                                                                      |
| --- |----------------------------------------------------------------------------------------------------------------------------|
| `[key: number]` | The task description for the i-th task                                                                                     |
| `start_unix_timestamp` | The unix timestamp for the start of the first task. <br/>Every next task will be unlocked exactly 24h after the last task. |

## Contributing
If you want to contribute to this project, feel free to do so. Just fork this repository and create a pull request with your changes.