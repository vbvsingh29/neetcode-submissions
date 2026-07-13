class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const arr = new Array(nums.length * 2)
        for (let i =0;i<nums.length;i++){
            arr[i] = nums[i]  // 0
            arr[i+nums.length]= nums[i] // 0+ 4, 1+4
        }
        return arr
    }
}
