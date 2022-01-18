export type LogJamConfig = {
    name?: string;
    debug?: boolean;
};
export type LogProps = {
    msg: string;
    options?: LogJamConfig;
};
export function log({ msg, options }: LogProps): void;
export function jam(options: LogJamConfig): void;

//# sourceMappingURL=types.d.ts.map
