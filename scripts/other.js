// 1. Set
{
  const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
  console.log(items.add(10));
  console.log(items.has(10));
  console.log(items.delete(10));
  console.log(items.size);
  // console.log(items.clear());
  console.log("items:", items);
  const numbers = [1, 2, 3, 4, 5, 5, 5, 5];
  const uniqueNumbers = [...new Set(numbers)];
  console.log("uniqueNumbers:", uniqueNumbers);
}
// 2. Map
{
  const map = new Map();
  map.set("name", "John");
  map.set("age", 30);
  console.log(map.get("name"));
  console.log(map.has(1));
  console.log("map:", map);
  // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
  //   Input: nums = [2,7,11,15], target = 9
  // Output: [0,1]
  // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  function twoSum1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      const needed_value = target - element;
      for (let j = 1; j < nums.length; j++) {
        const element2 = nums[j];
        if (needed_value === element2) return [i, j];
      }
    }
    return [];
  }
  function twoSum2(nums, target) {
    const hash_table = new Map();
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      const needed_value = target - element;
      if (hash_table.has(needed_value)) {
        const foundIndex = hash_table.get(needed_value);
        return [index, foundIndex];
      } else {
        hash_table.set(element, index);
      }
    }
  }
  // hash_table empty
  // 1. hash_table.set(2, 0) -> {2 => 0}
  // 2. hash_table.has(2) -> true -> hash_table.get(2) -> 0 -> [1, 0]
  console.log(twoSum2([2, 7, 11, 15], 9));
}
{
  // 3. Generator Function
  function* printValue() {
    let count = 1;
    while (count < 5) {
      yield "hello counter";
      yield ++count;
    }
  }
  const counter = printValue();
  console.log(counter.next());
  console.log(counter.next());
  // console.log(counter.next());
  // console.log(counter.next());
  // console.log(counter.next());
  // console.log(counter.next());
  // console.log(counter.next());
}
