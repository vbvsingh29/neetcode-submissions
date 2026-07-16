class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxlen = 0
        for (const n of set) {
            if (set.has(n - 1)) continue;
            else {
                let current = n;
                let count = 1;
                while (set.has(current + 1)) {
                    current++;
                    count++;
                }

                maxlen = Math.max(count, maxlen)
            }
        }
        return maxlen
    }
}
