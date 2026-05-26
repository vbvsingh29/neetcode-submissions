class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map()
        for (const n of nums){
            map.set(n, (map.get(n) || 0) +1)
        }

        for (const [key, value] of map.entries()){
            if (value > nums.length/2) return key
        }
    }
}
