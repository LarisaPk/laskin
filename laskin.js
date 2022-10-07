let result = "";
let a;
let b;
let operator;    

let btn = document.getElementById("laskin");
btn.addEventListener("click", () => myFunction(event));

// when button is clicked
function myFunction(event) {
    // if number is clicked - assign it to result
    if (!isNaN(Number(event.target.innerHTML))) {
    result = result + event.target.innerHTML;
    }
    // if not number is clicked
    else if (isNaN(Number(event.target.innerHTML))) {
        //if there is no first number - assigh result to a
        if (!a) {
            a = result;
            result = ""
            console.log("a " + a)
        }
        if (event.target.innerHTML !== "ENTER") {
            operator = event.target.innerHTML;
            console.log("operator " + operator)
        } 
        // if there is first number but no second number - assign result to b
        else if (a && !b) {
            b = result;
            result = ""
            console.log("b " + b)
        } 
    }
    // if ENTER is clicked do calculations depending on operator
    if (event.target.innerHTML == "ENTER") {
        console.log("enter")
        
        switch(operator) {
            case "+":
                result = Number(a) + Number(b);
                break;
            case "-":
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
    // reset the result and variables to initial values         
    const btn = document.createElement("button");
    const res = document.getElementById("reset");
    res.appendChild(btn);
    btn.innerHTML = "RESET" 
    
    btn.addEventListener("click" , () => {
        btn.remove();
        a = null;
        b = null;
        result = "";
        operator ="";
    })
    }
//get "result" element and set value to the vriable value
document.getElementById("result").innerHTML = result;    
}