class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const string of strs) {
            const arr = new Array(26).fill(0);
            for (const str of string) {
                arr[str.charCodeAt(0) - 97]++;
            }
            const key = arr.join("#");
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(string);
        }
        return Array.from(map.values())
    }
}
