import { useOption } from "./hooks/useOption";
import { logger, pathExistSync } from "./utils";
import { coreTask } from "./core";
import * as process from "process";

(async function () {
  const options = await useOption();
  if (!pathExistSync(options.target)) {
    console.error(`entry path<${options.target}> is not exist`);
    process.exit(1);
  }

  logger(options.visible);
  coreTask(options);
})();
