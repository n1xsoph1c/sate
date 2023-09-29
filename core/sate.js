const Encoder = require("./encoder");
const Decoder = require("./decoder");

class SATE {
    constructor() {
        this.encoder = new Encoder();
        this.decoder = new Decoder();
    }

    encode(text) {
        return this.encoder.encodeTEXT(text);
    }

    decode(data) {
        return this.decoder.decodeToJSX(data);
    }
}

module.exports = SATE;
