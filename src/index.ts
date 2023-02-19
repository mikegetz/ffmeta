#!/usr/bin/env node
import { run, } from './cli';
import pjson from './types/package';
const { name, } = pjson;

try {
  run();
} catch (e) {
  console.error(`ERROR while running ${name} : ${e}`);
}
