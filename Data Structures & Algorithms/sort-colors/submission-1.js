class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        function quickSort(left, right) {
            if(left >= right){
                return
            }

            let pivotIndex = partition(left,right)

            quickSort(left ,pivotIndex-1 )
            quickSort(pivotIndex+1,right) 
        }

        function partition(left, right){
            let pivot = nums[right];
            let p = left;

            for(let i = left ; i< right ; i++){
                if(nums[i]<pivot){
                    [nums[i], nums[p]] = [nums[p],nums[i]]
                    p++
                }
            }

            [nums[p],nums[right]] = [nums[right], nums[p]]

            return p
        }

        quickSort(0, nums.length-1)
        return nums
    }
}
