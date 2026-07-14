class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function split(arr) {
            if (arr.length <= 1) return arr;

            let mid = Math.floor(arr.length / 2);
            let left = split(arr.slice(0, mid));
            let right = split(arr.slice(mid));

            return merge(left, right);
        }

        function merge(left, right) {
            let i = 0,
                j = 0;
            let result = [];

            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }

            while (i < left.length) {
                result.push(left[i]);
                i++;
            }
            while (j < right.length) {
                result.push(right[j]);
                j++;
            }

            return result;
        }
        return split(nums);
    }
}
