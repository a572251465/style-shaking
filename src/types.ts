export interface IDefaultOptions {
  ignore: string;
  ext: string;
  fix: boolean;
  target: string;
  visible: true;
}

export interface INormalFn {
  (...args: any[]): any;
}

export type IResultOptions = Omit<IDefaultOptions, "ignore" | "ext"> & {
  ignore: string[];
  ext: string[];
};

export enum EmitterTypes {
  INFO = "INFO",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS"
}
