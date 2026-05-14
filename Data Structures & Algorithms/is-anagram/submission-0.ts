class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        s = s.split('').sort().join('');
        t = t.split('').sort().join('');
        return s === t;
    }
}
