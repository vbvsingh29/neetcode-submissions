class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = new Array(nums.length).fill(1);
        // [1,2,4,6]
        // [1,1,2,8]
        let prefix = 1;
        for (let i = 1; i < nums.length; i++) {
            prefix = prefix * nums[i-1] 
            arr[i] = prefix;
        }
        let postfix =1
        // [1,2,4,6]
        // [1,1,2,8]
        // [48,24,12,8]
        for (let i = nums.length - 1; i >= 0; i--) {
            arr[i] = arr[i] * postfix
            postfix  *= nums[i] 
        }

        return arr
    }
}
