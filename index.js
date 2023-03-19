let input = document.getElementById("inputt");
let submit = document.getElementsByClassName("submit")[0];
let result = document.getElementsByClassName("result")[0];
let convertFrom = document.getElementById("convertFrom");
let convertTo = document.getElementById("convertTo");

submit.addEventListener('click', () =>{
    if(convertFrom.value==='inch' && convertTo.value==='foot'){
        result.value=(input.value/12);
    }
    if(convertFrom.value==='inch' && convertTo.value==='mm'){
        result.value=(input.value*25.4);
    }
    if(convertFrom.value==='inch' && convertTo.value==='cm'){
        result.value=(input.value*2.54);
    }
    if(convertFrom.value==='inch' && convertTo.value==='m'){
        result.value=(input.value*0.0254);
    }
    if(convertFrom.value==='inch' && convertTo.value==='km'){
        result.value=(input.value*0.0000254);
    }
    if(convertFrom.value==='foot' && convertTo.value==='inch'){
        result.value=(input.value*12);
    }
    if(convertFrom.value==='foot' && convertTo.value==='mm'){
        result.value=(input.value*304.8);
    }
    if(convertFrom.value==='foot' && convertTo.value==='cm'){
        result.value=(input.value*30.48);
    }
    if(convertFrom.value==='foot' && convertTo.value==='m'){
        result.value=(input.value*0.3048);
    }
    if(convertFrom.value==='foot' && convertTo.value==='km'){
        result.value=(input.value*0.0003048);
    }
    if(convertFrom.value==='mm' && convertTo.value==='inch'){
        result.value=(input.value*0.03937);
    }
    if(convertFrom.value==='mm' && convertTo.value==='foot'){
        result.value=(input.value*0.003280);
    }
    if(convertFrom.value==='mm' && convertTo.value==='cm'){
        result.value=(input.value*0.1);
    }
    if(convertFrom.value==='mm' && convertTo.value==='m'){
        result.value=(input.value*0.001);
    }
    if(convertFrom.value==='mm' && convertTo.value==='km'){
        result.value=(input.value*0.000001);
    }
    if(convertFrom.value==='cm' && convertTo.value==='inch'){
        result.value=(input.value*0.3937);
    }
    if(convertFrom.value==='cm' && convertTo.value==='foot'){
        result.value=(input.value*0.03280);
    }
    if(convertFrom.value==='cm' && convertTo.value==='mm'){
        result.value=(input.value*10);
    }
    if(convertFrom.value==='cm' && convertTo.value==='m'){
        result.value=(input.value*0.01);
    }
    if(convertFrom.value==='cm' && convertTo.value==='km'){
        result.value=(input.value*0.00001);
    }
    if(convertFrom.value==='m' && convertTo.value==='inch'){
        result.value=(input.value*39.37);
    }
    if(convertFrom.value==='m' && convertTo.value==='foot'){
        result.value=(input.value*3.280);
    }
    if(convertFrom.value==='m' && convertTo.value==='mm'){
        result.value=(input.value*1000);
    }
    if(convertFrom.value==='m' && convertTo.value==='cm'){
        result.value=(input.value*100);
    }
    if(convertFrom.value==='m' && convertTo.value==='km'){
        result.value=(input.value*0.001);
    }
    if(convertFrom.value==='km' && convertTo.value==='inch'){
        result.value=(input.value*39370.1);
    }
    if(convertFrom.value==='km' && convertTo.value==='foot'){
        result.value=(input.value*3280.84);
    }
    if(convertFrom.value==='km' && convertTo.value==='mm'){
        result.value=(input.value*1000000);
    }
    if(convertFrom.value==='km' && convertTo.value==='cm'){
        result.value=(input.value*100000);
    }
    if(convertFrom.value==='km' && convertTo.value==='m'){
        result.value=(input.value*1000);
    }
    if(convertFrom.value==='mg' && convertTo.value==='g'){
        result.value=(input.value*0.001);
    }
    if(convertFrom.value==='mg' && convertTo.value==='kg'){
        result.value=(input.value*0.000001);
    }
    if(convertFrom.value==='g' && convertTo.value==='mg'){
        result.value=(input.value*100);
    }
    if(convertFrom.value==='g' && convertTo.value==='kg'){
        result.value=(input.value*0.001);
    }
    if(convertFrom.value==='kg' && convertTo.value==='mg'){
        result.value=(input.value*1000000);
    }
    if(convertFrom.value==='kg' && convertTo.value==='g'){
        result.value=(input.value*1000);
    }
    if(convertFrom.value===convertTo.value){
        result.value=(input.value);
    }
    if(input.value===""){
        result.value="Enter the value"
    }
})