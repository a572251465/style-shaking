import * as process from "process";
import { program } from "commander";
import { IDefaultOptions, IResultOptions } from "../types";
import { defaultOptions } from "../utils";

/**
 * @author lihh
 * @description 获取脚手架中参数
 */
export async function useOption() {
  const { npm_package_version = "1.0.0" } = process.env;
  defaultOptions.target = process.cwd();

  program
    .version(npm_package_version)
    .option(
      "-i, --ignore <ignore>",
      "ignore file or folder, default: ['node_modules']"
    )
    .option(
      "-e, --ext <ext>",
      "check file suffix, default: ['.vue', '.js', '.tsx', '.ts']"
    )
    .option("-f, --fix", "auto remove surplus css")
    .option("-v, --visible", "print real-time log")
    .option("-t, --target <target>", "check style Start Folder");

  program.parse(process.argv);

  const options = Object.assign(
    {},
    defaultOptions,
    program.opts()
  ) as IDefaultOptions;

  const result: IResultOptions = {
    ignore: options.ignore.split(","),
    fix: options.fix,
    target: options.target,
    ext: options.ext.split(","),
    visible: options.visible
  };
  return result;
}
