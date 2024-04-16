let fruits=['Apple', 'Mango', 'Orange', 'Guava', 'Banana', 'Strawberry','Pineapple']
console.log(fruits)

//Array Methods
// 1. push() - add element at the end of the array
// 2. pop() - remove element from the end of the array
// 3. shift() - remove lement from the beginning of the array
// 4. unshift() - add element at the beginning of the array
// 5. splice() - add or remove element from the array
// 6. slice() - copy elements from the array
// 7. indexOf() - find the index of the element
// 8. concat() - merge two array
// 9. map() - iterate over the array
// 10. filter() - filter the elements of the array
// 11. forEach() - iterate over the array

console.log(fruits[0])
console.log(fruits.length)
console.log(fruits[5])
console.log(fruits.slice(2,6))

fruits.push('banana')
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.concat()
console.log(fruits)

let index= fruits.indexOf('mango')
console.log(index)
 
console.log('----------------')
let nums = [1,2,3,4,5,6,7,8,9,10]

for (let i=0; i<nums.length; i++){
    console.log(nums[i]**2)
}

    // Iteration using forEach
    nums.forEach((i)=>{
        console.log(i**2)
    })

    // Iteration using map
    let square = nums.map((x) => x**2)
    console.log(square)

    // filter function
    let even = nums.filter((x) => x%2==0)
    console.log(even)

    let odd = nums.filter((x) => x%2!=0)
    console.log(odd)

    //color array
    let colors=['blue','red','green','pink','black']
    let color = colors.filter((colors)=> colors.length > 4);

    console.log(color);
