// Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace.


class Solution {
    reverse(arr, n, i = 0) {
       if (i >= n/2){
        return;
       }
       let partnerindex = n - 1 - i;
       let temp = arr[i];
       arr [i] = arr[partnerindex];
       arr[partnerindex] = temp;
       this.reverse(arr, n, i +1);
    }
};