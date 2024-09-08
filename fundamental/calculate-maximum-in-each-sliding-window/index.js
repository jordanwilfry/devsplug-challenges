function maxSlidingWindow(nums, k) {
    if (nums.length === 0 || k === 0) {
        console.log("please neither your array nor the The size of the sliding window can be empty or zero");
        return [];
    }

    if (nums.length < k) {
        console.log("size of the sliding window should the less or equal to the length of the array");
        return [];
    }

    let result = [];

    for (let i = 0; i <= nums.length - k; i++) {

        let currentWindows = nums.slice(i, k + i);
        const max = Math.max(...currentWindows)

        result.push(max);
    }

    return result;
}

// Example usage
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(maxSlidingWindow(nums, k)); 

nums = [1];
k = 1;
console.log(maxSlidingWindow(nums, k)); 


nums = [1, 3, 4, 5, 6, 7 , -2 , -3, -4];
k = 4;
console.log(maxSlidingWindow(nums, k)); 
