class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (const str of strs) {
            result += str.length + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let result = []
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            let length =Number(str.slice(i,j))
            j++

            let word = str.slice(j,j+length)
            result.push(word)
            i = j+length
        }
        return result
    }
}
