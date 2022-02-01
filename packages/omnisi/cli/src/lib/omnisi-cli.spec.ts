import { test, expect } from 'vitest';
import { omnisiCli } from './omnisi-cli';

test('omnisi-cli', () => {
  expect(omnisiCli()).toEqual('omnisi-cli');
});
