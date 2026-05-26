class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (const n of nums){
            if(map.has(n)){
                return true
            }
            else {
                map.set(n,1)
            }
        }
        return false
    }
}
