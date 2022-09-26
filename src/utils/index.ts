import { IDefaultOptions } from "../types";

export const defaultOptions: IDefaultOptions = {
  ignore: "node_modules",
  ext: ".vue,.js,.tsx,.ts",
  fix: false,
  target: "",
  visible: true
};

export * from "./emitter";
export * from "./logger";
