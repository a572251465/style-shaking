import { EmitterTypes, INormalFn } from "../types";

const pool: Record<EmitterTypes, INormalFn[]> = { [EmitterTypes.LOGGER]: [] };

const on = (keyName: EmitterTypes, fn: INormalFn) => {
  const fns = pool[keyName] || (pool[keyName] = []);
  if (fns.includes(fn)) return;

  fns.push(fn);
};
const emit = (keyName: EmitterTypes, ...args: any[]) => {
  const fns = pool[keyName] || (pool[keyName] = []);
  if (fns.length === 0) return;

  fns.forEach((fn) => fn(...args));
};

export const emitter = {
  on,
  emit
};
