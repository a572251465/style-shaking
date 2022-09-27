import { statSync, readdirSync, joinPath } from "../utils";

export const useTakeFiles = (dir: string): string[] => {
  const stat = statSync(dir);
  if (stat.isFile()) return [dir];

  const dirs = [] as string[];
  const callback = (dir: string) => {
    const stat = statSync(dir);
    if (stat.isFile()) {
      dirs.push(dir);
      return;
    }

    const excludeFileNames = ["node_modules"];
    const fileNames = readdirSync(dir).filter((name) => !excludeFileNames.includes(name));
    fileNames.forEach((name) => {
      callback(joinPath(dir, name));
    });
  };
  callback(dir);

  return dirs;
};
