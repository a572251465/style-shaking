import { statSync, readdirSync, accessSync, constants } from "fs";
import { join as joinPath } from "path";

export const split = (str: string, splitSymbol = ",") => str.split(splitSymbol);
export const pathExistSync = (dir: string) => {
  try {
    accessSync(dir, constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};

export * from "./emitter";
export * from "./logger";
export * from "./defaultConfigure";
export { statSync, readdirSync, accessSync, joinPath };
