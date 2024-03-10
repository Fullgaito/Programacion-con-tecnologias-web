function suma(){
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero1").value;
    if (num1.lenght>0 && num2.lenght>0){
        num1=parseInt(num1)
        num2=parseInt(num2)
        let resultado=num1+num2;
        alert(resultado);
    }else{
        alert("No se puede")
    }
}
