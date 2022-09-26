import { emitter } from "./emitter";
import { EmitterTypes } from "../types";

export const logger = (visible: boolean) => {
  if (!visible) return;

  emitter.on(EmitterTypes.LOGGER, function () {
    console.log("test");
  });
};
