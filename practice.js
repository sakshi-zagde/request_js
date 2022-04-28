// s={'1':['a','b'],'2':['c','d']}
// for (i in s){
//      if (i==='1'){
//      for (j in i){
//      console.log(s[i][0],s[i][1])
//           }
// }
// }

// s=require("readline-sync")
// d=s.questionInt("enter the num")
// try{
//      console.
// }

// function getUserById(id) {
//      if (typeof id !== 'number' || id <= 0) {
//          throw new Error('Invalid id argument');
//      }
 
//      return new Promise((resolve, reject) => {
//          resolve({
//              id: id,
//              username: 'admin'
//          });
//      });
//  }
//  getUserById('a')
//  .then(user => console.log(user.username))
//  .catch(err => console.log(err));


let a="harry"
a=undefined
if ( a!= undefined){
     throw new console.error(("this is not undefined"));
}
else{
     console.log("this is undefined")
}
try{
     console.log("we are inside try block");
     functionharry()
}
catch(error){
     console.log(error);
}
