class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // productExceptSelf(nums) {
    //     let leftArr = new Array(nums.length).fill(1);
    //     let prefix = 1;
    //     for (let i = 1; i < nums.length; i++) {
    //         prefix *= nums[i - 1];
    //         leftArr[i] = prefix;
    //     }
    //     let suffix = 1;
    //     let rightArr = new Array(nums.length).fill(1);
    //     for (let i = nums.length - 2; i >= 0; i--) {
    //         suffix *= nums[i + 1];
    //         rightArr[i] = suffix;
    //     }

    //     let result = [];
    //     for (let i = 0; i < leftArr.length; i++) {
    //         result[i] = leftArr[i] * rightArr[i];
    //     }
    //     return result;
    // }
    productExceptSelf(nums) {
        let leftArr = new Array(nums.length).fill(1);
        let prefix = 1;
        for (let i = 1; i < nums.length; i++) {
            prefix *= nums[i - 1];
            leftArr[i] = prefix;
        }
        let suffix = 1;
        for (let i = leftArr.length - 1; i >= 0; i--) {
            leftArr[i] = leftArr[i] *suffix;
            suffix *= nums[i]
        }
        return leftArr

    }
}
