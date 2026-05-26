class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for (const n of nums){
            map.set(n , (map.get(n) || 0) + 1)
        }

        const bucket = new Array(nums.length+1).fill(0).map(()=> [])

        for (const [key, value] of map.entries()){
            bucket[value].push(key)
        }

        const result = []
        for(let i = bucket.length-1 ; i>=0 && result.length < k; i--){
            if (bucket[i].length > 0){
                result.push(...bucket[i])
            }
        }

        return result.slice(0,k)
    }
}
