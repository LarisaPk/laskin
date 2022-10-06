let result = "";
let a = null;
let b = null;
let operator;    

let btn = document.getElementById("laskin");
btn.addEventListener("click", () => myFunction(event));

function myFunction(event) {

 //console.log(event.target.innerHTML);
 //console.log(Number(event.target.innerHTML));

  if (!isNaN(Number(event.target.innerHTML))) {
    //console.log(event.target.innerHTML)
    result = result + event.target.innerHTML;

  }

  else if (isNaN(Number(event.target.innerHTML))) {
    if (!a) {
        a = result;
        console.log("a " + a);
        result = ""
    }
    else if (a && !b) {
        b = result;
        console.log("b " + b);
        result = ""
    }
    if (event.target.innerHTML != "ENTER") {
    operator = event.target.innerHTML;
    console.log(operator);
    } 
  }

   if (event.target.innerHTML == "ENTER") {
   // console.log(event.target.innerHTML);
   // console.log("operator" + operator);

    switch(operator) {
        case "+":
            result = Number(a) + Number(b);
            break;
        case "+":
            result = Number(a) - Number(b);
            break;
        case "*":
            result = Number(a) * Number(b);
            break;
        case "/":
            result = Number(a) / Number(b);
            break;                        
        default:
            break
    }
    const btn = document.createElement("button");
    const res = document.getElementById("C");
    res.appendChild(btn);
    btn.innerHTML = "RESET" 
    
    btn.addEventListener("click" , () => {
        btn.remove();
        a = null;
        b = null;
        result = "";
    })
  }
  document.getElementById("result").innerHTML = result;
}