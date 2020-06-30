export const kidsWithCandies = function (candies: number[], extraCandies: number): boolean[] {
    let res: boolean[] = [];
    let max = candies.reduce((a, b) => Math.max(a, b));
    for (let i = 0; i < candies.length; i++) {
        res[i] = (candies[i] + extraCandies >= max) ? true : false;
    }
    return res;
};