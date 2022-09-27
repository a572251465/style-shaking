import { emitter } from "../utils";
import { EmitterTypes } from "../types";

export const resolveVue = (dir: string, done: () => void) => {
  emitter.emit(EmitterTypes.SUCCESS, dir);
  done();
};
