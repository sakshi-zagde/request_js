const axios=require("axios")
const  fs = require("fs")
let choos=require("readline-sync")
const x=axios.get('https://api.merakilearn.org/courses')

.then(re=>{
    meraki_data=re.data
    file=JSON.stringify(meraki_data,null,3)
    f=fs.writeFileSync("course.json",file)
    for (i in meraki_data){
        for (j in meraki_data[i]){
            if (j==="name"){
               console.log(parseInt(i)+1,meraki_data[i][j],meraki_data[i]["id"])  
          }
     }
    }
choose=choos.questionInt("which course do you want choose : ")  
choose1=choose-1
const h=axios.get("https://api.merakilearn.org/courses/"+meraki_data[choose1]["id"]+" "+"/exercises")

.then(my_=>{ 
    my_list=my_.data
    fil=JSON.stringify(my_list,null,5)
    fs.writeFileSync("course1_exercise.json",fil) 
    stud=my_list["course"]["exercises"]
    n=0
    for (i in stud){
        console.log(n+1,stud[i]["name"])
        n++
    }
const parent_id=choos.question("enter the parent id :")
const slug=stud[parent_id]['content']
console.log(slug)
    }).catch((error)=>{
 console.log(error)
    })

}).catch((error)=>{
    console.log(error)
})