import { emitter } from "./emitter";
import { EmitterTypes } from "../types";
import colors from "colors";

export const logger = (visible: boolean) => {
  if (!visible) return;

  emitter.on(EmitterTypes.SUCCESS, function (dir: string) {
    console.log(`${colors.cyan("√")} path<${dir}> is success.`)
  });
};
