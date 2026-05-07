let x=[1,2,3,4,5]
console.log(x)

let y= Array(1,2,3)
console.log(y)

let z=Array(3) // 3 space allocated
console.log(z)
z[0]=10;
z[1]=20;
/*z.push(1)
z.push(2)
z.push(3)
console.log(z) */
for(let i=1; i<=3; i++)
{
    z.push(i);
}
console.log(z)
console.log(z.length)

let fruits=["banana","apple","kiwi"]
fruits.sort()
console.log(fruits)

let num= [5,4,1,3,2]
//num.sort((a,b)=>a-b) // ascending order
num.sort((a,b)=>b-a) 
console.log(num)