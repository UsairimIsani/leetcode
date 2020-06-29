export const runningSum = function (nums: number[]): number[] {
    let res: number[] = []
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        res[i] = sum;
    }
    return res

};