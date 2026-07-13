class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        for (const char of t) {
            if(!map.has(char)) return false 
            map.set(char, (map.get(char) || 0) - 1);

            if (map.get(char) === 0) map.delete(char)
        }

        return map.size ===0
    }
}
