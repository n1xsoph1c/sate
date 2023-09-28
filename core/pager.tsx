import { Encoder } from "./encoder";
import { Decoder } from "./decoder"
import { TencodedPage } from "./types";

export class Pager {
    encoder = new Encoder()
    decoder = new Decoder()

    encode(text:string) {
        return this.encoder.encodeTEXT(text)
    }

    decode(data: TencodedPage[]) {
        return this.decoder.decodeToJSX(data)
    }
}