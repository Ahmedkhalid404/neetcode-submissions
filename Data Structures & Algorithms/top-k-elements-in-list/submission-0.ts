interface data{
    el:number;
    freq:number;
}
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let freq = new Map<number, number>();
        for(const el of nums){
            const curr: number = freq.get(el) ?? 0;
            freq.set(el, curr + 1);
        }
        let arr : data[] = [];
        for(let el of freq.keys()){
            arr.push({
                el,
                freq : freq.get(el)
            });
        }
        return arr.sort((a: data, b: data) => b.freq - a.freq).slice(0, k).map((a: data) => a.el);
    }
}
