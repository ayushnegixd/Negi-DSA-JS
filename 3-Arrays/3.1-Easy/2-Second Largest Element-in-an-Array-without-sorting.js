// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.


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