import { ReactNode } from "react";
import { TencodedPage } from "./types";
export default class Decoder {
    private elementStyles;
    private createElement;
    decodeToJSX(data: TencodedPage[]): ReactNode;
}
