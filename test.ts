import {
    assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { two_sum } from "./index.ts";

Deno.test("Two Sums of LeetCode", () => {
    const x = two_sum([2, 7, 11, 15], 9);
    assertEquals(x, [0, 1]);
});