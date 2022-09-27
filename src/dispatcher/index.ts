import { resolveVue } from "./resolveVue";

const strategy = {
  ".vue": resolveVue
};

export const dispatcher = (dir: string, done: () => void) => {
  for (const [keyName, fn] of Object.entries(strategy)) {
    if (dir.endsWith(keyName)) {
      fn(dir, done);
      continue;
    }
  }
};
