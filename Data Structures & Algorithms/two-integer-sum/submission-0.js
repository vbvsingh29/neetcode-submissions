class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const maps = new Map();


        for(let i =0 ; i< nums.length;i++){
            let diff = target - nums[i]
            if (maps.has(diff)){
                return [maps.get(diff),i]
            }
            maps.set(nums[i],i)
        }
        return []
    }
}
