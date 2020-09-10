import { IWatcher } from "./Watcher.interface";
import { Tail } from "tail";
export declare class Watcher implements IWatcher {
    watcher: Tail;
    constructor(filename: string);
    on(eventType: "line", callback: (data: any) => void): void;
}
