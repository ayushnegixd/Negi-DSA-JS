// Given an array nums of size n which may contain duplicate elements.
// Rreturn a list of pairs where each pair contains a unique element from the array and its frequency in the array.
// You may return the result in any order, but each element must appear exactly once in the output.


class Solution {
    countFrequencies(nums) {
        const countmap = new Map ();
        for(let num of nums) {
            countmap.set(num, (countmap.get(num) || 0) + 1);
        }
        return [...countmap];
    }
};