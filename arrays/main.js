strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], I'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// push
strings.push('e'); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(n)

// splice
strings.splice(2, 0, 'bach');

console.log(strings);
