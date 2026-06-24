class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        }
        const arrayMap = new Map()
        for(let i=0;i<s.length;i++){
            if(arrayMap.has(s[i])){
                arrayMap.set(s[i],arrayMap.get(s[i]) + 1)
            }else{
                arrayMap.set(s[i],1)
            }
        }

        for(let i=0;i<t.length;i++){
            if(arrayMap.has(t[i])){
                const value = arrayMap.get(t[i])
                if(value >1){
arrayMap.set(t[i],(value - 1))
                }else{
                    arrayMap.delete(t[i])
                }
                
            }else{
                return false
            }
        }

        return arrayMap.size == 0 ? true : false
    }
}
