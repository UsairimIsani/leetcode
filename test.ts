import {
    assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { runningSum } from "./leetcode/one_d_arr.ts";
import { two_sum } from "./leetcode/two_sums.ts";

Deno.test("Two Sums of LeetCode", () => {
    const x = two_sum([2, 7, 11, 15], 9);
    assertEquals(x, [0, 1]);
});
Deno.test("One D Array Of Leetcode", () => {
    let x = runningSum([1, 2, 3, 4])
    assertEquals(x, [1, 3, 6, 10])
})