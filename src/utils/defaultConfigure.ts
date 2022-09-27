import { IDefaultOptions } from "../types";

export const defaultOptions: IDefaultOptions = {
  ignore: "node_modules",
  ext: ".vue,.js,.tsx,.ts",
  fix: false,
  target: "",
  visible: true
};
export const cliDefaultOptions = [
  ["-i, --ignore <ignore>", "ignore file or folder, default: ['node_modules']"],
  ["-e, --ext <ext>", "check file suffix, default: ['.vue']"],
  ["-f, --fix", "auto remove surplus css"],
  ["-v, --visible", "print real-time log"],
  ["-t, --target <target>", "check style Start Folder"]
];
