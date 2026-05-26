class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const maps = new Map();
        s.split("").map((x)=>{
            maps.set(x,(maps.get(x)||0)+1)
        })
        t.split("").map((x)=>{
           maps.set(x,maps.get(x)-1)
        })
        for (const value of maps.values()){
            if (value != 0){
                return false
            }
        }
        return true
    }
}
