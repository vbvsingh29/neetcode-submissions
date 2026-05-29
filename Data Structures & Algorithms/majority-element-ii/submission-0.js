class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    
    // BRUTE FORCE
    majorityElement(nums) {
        const frequency = Math.floor(nums.length / 3);

        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        const result = [];
        for (const [key, value] of map.entries()) {
            if (value > frequency) {
                result.push(key);
            }

            if (result.length === 2) return result;
        }
        return result;
    }
}
