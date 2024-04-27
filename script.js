

let string = "";
 let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((item)=>
{
    item.addEventListener('click',(e)=>
{
    
    if(e.target.innerHTML == "=")
    {
        string=eval(string);
        document.querySelector('.data').value = string;
       
    }else if(e.target.innerHTML == "AC"){
        string=" ";
        document.querySelector('.data').value = string;
    }
    else if(e.target.innerHTML == "DEL"){
        string=string.slice(0,-1);
        document.querySelector('.data').value = string;
        }
    else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('.data').value=string;
    }  
})
})



