/**
 * 
 * @param nums : Array<number>
 * @param target : number
 * @returns Array<number>
 */
export const two_sum = function (nums: Array<number>, target: number): Array<number> {
    let sol: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        let comp: number = target - nums[i];
        let comp_sol = sol.has(comp);
        if (comp_sol) {
            let res = sol.get(comp) || 0;
            return [res, i];
        }
        sol.set(nums[i], i);
    }
    return []
};