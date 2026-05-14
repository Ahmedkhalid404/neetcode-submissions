class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(s => `${s.length}-` + s).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result: string[] = [];
        let length: number = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] === '-'){
                result.push(str.slice(i + 1, i + length + 1));
                i ++;
                i = i + length - 1;
                length = 0;
            }
            else
                length = length * 10 + +str[i];
        }
        return result;
    }
}
