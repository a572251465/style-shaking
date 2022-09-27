import * as process from "process";
import { program } from "commander";
import { IDefaultOptions, IResultOptions } from "../types";
import { cliDefaultOptions, defaultOptions, split } from "../utils";

export async function useOption() {
  // 1. init npm params
  const {
    env: { npm_package_version = "1.0.0" },
    cwd
  } = process;
  defaultOptions.target = cwd();

  // 2. configure commander params
  program.version(npm_package_version);
  cliDefaultOptions.forEach(([key1, key2]) => {
    program.option(key1, key2);
  });
  program.parse(process.argv);

  // 3. merge params
  const options = Object.assign({}, defaultOptions, program.opts()) as IDefaultOptions;
  const result: IResultOptions = {
    ignore: split(options.ignore),
    fix: options.fix,
    target: options.target,
    ext: split(options.ext),
    visible: options.visible
  };
  return result;
}
