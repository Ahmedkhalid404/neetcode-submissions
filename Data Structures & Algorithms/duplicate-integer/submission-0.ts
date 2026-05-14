class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let seen = new Set<number>();
        for(let it of nums){
            if(seen.has(it))
                return true;
            seen.add(it);
        }
        return false;
    }
}
