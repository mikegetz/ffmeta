import { run, } from './cli';

try {
  run();
} catch (e) {
  console.error(`Caught error while running: ${e}`);
}
