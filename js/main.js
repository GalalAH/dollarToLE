function convert(){
var dollar = document.getElementById("num").value;
var result =document.getElementById("result");
if(dollar==""){
result.innerHTML= " Enter Data";
return false;
}else if(isNaN(dollar)){
result.innerHTML= " Enter a Number not a text";
return false;

}else if(dollar<0){
result.innerHTML= " Enter a positve Number ";
return false;
}else if(dollar==0){
result.innerHTML= " Enter a Number Rather a zero";
return false;
}else{


    result.innerHTML=   dollar * 50;

return false;
}

}