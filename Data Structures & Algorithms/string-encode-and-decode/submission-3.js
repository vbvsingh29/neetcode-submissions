class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let decoded = "";
        for (let i = 0; i < strs.length; i++) {
            decoded += strs[i].length + "#" + strs[i];
        }
        return decoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 5#Hello5#World
        let i = 0;
        let result = [];
        while (i < str.length) {
            let j =i
            while (str[j] != "#") {
                j++;
            }

            let length = Number(str.slice(i,j));
            j++;
            result.push(str.slice(j, j + length));
            i = j+length
        }
        return result;
    }
}
