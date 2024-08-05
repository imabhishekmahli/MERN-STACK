// print the number divisible by 2 

// let num = [1,2,3,4,5,6,7,8,9];

// for(let i=0;i<num.length;i++)
// {
//   if(num[i]%2==0)
//   {
//     console.log(num[i])
//   }
// }

// biggest number in an Array

// let a = [1,5,42,4,5,2,3,1,55,4,7,8,6,2,11]
// let biggest = 0;
// for (let i=0;i<a.length;i++)
// {
//   if(a[i]>biggest){
//     biggest = a[i];
//   }
// }

// console.log(biggest)


// ------------------------------------------------

// object 

// let obj1 = ['abhishek','kumar','rohan']
// let obj2 = ['male','female','male']

// for(let i=0;i<obj1.length;i++)
// {
//   if(obj2[i]=='male')
//   {
//     console.log(obj1[i])
//   }
// }


// -------------------------
// Array of object

let a = [{
  firstName : 'abhishek',
  gender : 'male',
},{
  firstName : 'rohan',
  gender : 'male'
},{
  firstName : 'priya',
  gender : 'female'
}]

for(let i=0;i<a.length;i++)
{
  if(a[i]['gender']=='female')
  {
    console.log(a[i]['firstName'])
  }
}