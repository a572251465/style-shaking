import { IResultOptions } from "../types";
import { useTakeFiles } from "../hooks/useTakeFiles";
import { usePromiseChain } from "../hooks/usePromiseChain";

export const coreTask = (options: IResultOptions) => {
  const { ext, target } = options;
  const dirs = useTakeFiles(target).filter((name) => {
    const lastIndex = name.lastIndexOf(".");
    const suffix = name.slice(lastIndex);
    return ext.includes(suffix);
  });
  const chain = usePromiseChain(dirs);
  chain.then(() => {
    console.log("success");
  });
};
