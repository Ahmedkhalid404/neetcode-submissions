interface data{
        el: number;
        idx: number;
    }
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let arr: data[] = [];
        for(const it in nums){
            arr.push({
                el : nums[it],
                idx : +it
            })
        }
        arr = arr.sort((a: data, b: data) => {
            if(a.el < b.el) return -1;
            if(a.el > b.el) return 1;
            return 0;
        });

        let i = 0, j = nums.length - 1;
        while(i < j){
            const sum: number = arr[i].el + arr[j].el;
            if(sum === target) return [arr[i].idx, arr[j].idx];
            if(sum > target) j --;
            else i ++;
        }
        
        return [];
    }
}
