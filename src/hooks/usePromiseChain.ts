import { dispatcher } from "../dispatcher";

export const usePromiseChain = (paths: string[]) => {
  return paths.reduce((memo, curr) => {
    return memo.then(() => {
      return new Promise((resolve) => {
        dispatcher(curr, resolve);
      });
    });
  }, Promise.resolve());
};
