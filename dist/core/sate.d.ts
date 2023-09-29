/// <reference types="react" />
import { TencodedPage } from "./types";
export declare class SATE {
    private encoder;
    private decoder;
    encode(text: string): TencodedPage[];
    decode(data: TencodedPage[]): import("react").ReactNode;
}
