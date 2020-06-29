export const shuffle = function (nums: number[], n: number): number[] {
    let x = nums.slice(0, (nums.length / 2));
    let y = nums.slice((nums.length / 2), nums.length);
    let res = [];
    for (let i = 0; i < x.length; i++) {
        res.push(x[i]);
        res.push(y[i]);
    }
    return res
};