class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let maxLen = 0
        for (const num of set){
            if(set.has(num -1)) continue
            else {
                let current = num
                let count = 1
                while(set.has(current+1)){
                    current++
                    count++
                }
                maxLen = Math.max(count, maxLen)
            }
        }
    return maxLen
    }
}
