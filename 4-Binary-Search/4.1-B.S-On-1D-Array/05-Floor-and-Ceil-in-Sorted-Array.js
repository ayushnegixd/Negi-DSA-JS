// Given a sorted array nums and an integer x. Find the floor and ceil of x in nums. The floor of x is the largest element in the array which is smaller than or equal to x. The ceiling of x is the smallest element in the array greater than or equal to x. If no floor or ceil exists, output -1.


// optimal solution 
// time complexity: O(log n)
// space complexity: O(1)

function findFloorAndCeil(nums, x) {
    let floor = -1;
    let ceil = -1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === x) {
            floor = nums[mid];
            ceil = nums[mid];
            break;
        } else if (nums[mid] < x) {
            floor = nums[mid];
            left = mid + 1;
        } else {
            ceil = nums[mid];
            right = mid - 1;
        }
    }
    return { floor, ceil };
};