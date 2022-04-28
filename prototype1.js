let obj={
     name:"sakshi",
     address:"mars"
}
function Obj(given){
     this.name=given
}
Obj.prototype.getName=function(){
     return this.name
}
let obj2= new Obj("achal")
console.log(obj2)