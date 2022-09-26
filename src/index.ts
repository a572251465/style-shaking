import { useOption } from "./hooks/useOption";
import { logger } from "./utils";

(async function () {
  const options = await useOption();
  logger(options.visible);
})();
