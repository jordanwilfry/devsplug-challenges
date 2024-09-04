def generate_power_set(nums):
    def backtrack(start, path):
        power_set.append(path)
        for i in range(start, len(nums)):
            backtrack(i + 1, path + [nums[i]])

    power_set = []
    backtrack(0, [])
    return power_set

nums = [1, 2, 3]
generate_power_set(nums)
