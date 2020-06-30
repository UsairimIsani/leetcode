import {
    assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { runningSum } from "./leetcode/one_d_arr.ts";
import { two_sum } from "./leetcode/two_sums.ts";
import { shuffle } from "./leetcode/shuffle_arr.ts";
import { kidsWithCandies } from "./leetcode/greates_number_of_candies.ts";
import { defangIPaddr } from "./leetcode/defangIPaddress.ts";

Deno.test("Two Sums of LeetCode", () => {
    const x = two_sum([2, 7, 11, 15], 9);
    assertEquals(x, [0, 1]);
});
Deno.test("One D Array Of Leetcode", () => {
    let x = runningSum([1, 2, 3, 4])
    assertEquals(x, [1, 3, 6, 10])
})
Deno.test("Shuffle Of Leetcode", () => {
    let x = shuffle([2, 5, 1, 3, 4, 7], 3);
    assertEquals(x, [2, 3, 5, 4, 1, 7])
})
Deno.test("Extra Candies", () => {
    let x = kidsWithCandies([2, 3, 5, 1, 3], 3);
    assertEquals(x, [true, true, true, false, true])
})
Deno.test("Defang IP Address", () => {
    assertEquals(defangIPaddr("1.1.1.1"), "1[.]1[.]1[.]1")
})