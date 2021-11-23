//let textarea=document.getElementById("textarea")

const calculator=(num)=>{
  let textarea=document.getElementById("textarea").value
  document.getElementById("textarea").value=textarea+=num
  
}
const evaluation=()=>{
  try{
 const evall=eval(document.getElementById("textarea"). value)
 document.getElementById("textarea").value=evall;
  }
  //catching Invalid syntax
  catch{
    document.getElementById("textarea").value=("invalid syntax")
    
  }
}
//clearing the display
const Delete=()=>{
  document.getElementById("textarea"). value=" ";
}
