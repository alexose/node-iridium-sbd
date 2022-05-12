var usx = require("unishox2.siara.cc");
module.exports = {
    compress(str) {
        const arr = new Uint8Array(str.length + 10);
        usx.unishox2_compress_simple(str, str.length, arr);

        // Trim zeroes off buffer from right to left
        let output = "";
        let i = arr.length - 1;
        for (i; i > 0; i--) {
            if (arr[i] !== 0) {
                break;
            }
        }

        const sliced = arr.slice(0, i + 1);
        return Buffer.from(sliced);
    },
    decompress(hex) {
        const str = Buffer.from(hex).toString("");
        const out_buf = new Uint8Array(arr);
        return usx.unishox2_decompress_simple(out_buf, arr.length);
    },
};
