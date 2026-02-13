// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

//brute force approach
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(1) or O(n) depending on the implementation

function secondLargestElement(nums) {
    nums.sort((a, b) => b - a);
    return nums.length > 1 ? nums[1] : -1;
}

//optimal approach
// Time Complexity: O(n)
// Space Complexity: O(1)

function secondLargestElement(nums) { 
        let largest = nums[0];
        let slargest = -1;
        for (let i = 1; i < nums.length; i++){
            if (nums[i] > largest) {
                slargest = largest;
                largest = nums[i];
            }
            else if (nums[i] < largest && nums[i] > slargest){
                slargest = nums[i];
            }
        }
        return slargest;
    };