class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }
        const bucket = Array.from ({length:nums.length+1},()=>[])
        for (const [key,value] of map.entries()){
            bucket[value].push(key)
        }
        const arr =[]

        for (let i = bucket.length-1 ; i>=0;i--){
            for (const n of bucket[i]){
                arr.push(n)
            }

            if (arr.length === k) return arr
        }
    }
}
