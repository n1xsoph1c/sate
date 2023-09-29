import { Encoder } from "./encoder";
import { Decoder } from "./decoder.jsx"

export class SATE {
    encoder = new Encoder()
    decoder = new Decoder()

    encode(text) {
        return this.encoder.encodeTEXT(text)
    }

    decode(data) {
        return this.decoder.decodeToJSX(data)
    }
}