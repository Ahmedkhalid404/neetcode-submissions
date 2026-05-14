class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let mp = new Map<string, number>();
        let result: string[][] = [];
        for(const curr of strs){
            const sortedCurr: string = curr.split('').sort().join('');
            const idx: number = mp.get(sortedCurr);
            if(idx === undefined){
                mp.set(sortedCurr, result.length);
                result.push([curr]);
            } else{
                result[idx].push(curr);
            }
        }
        return result;
    }
}
