class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();

        for (const n of s){
            map.set(n,(map.get(n) || 0) +1)
        }

         for (const n of t){
            map.set(n,(map.get(n) || 0) -1)
        }

        for (const [key,value] of map.entries()){
            if(value !==0) return false
        }
        return true
    }
}
