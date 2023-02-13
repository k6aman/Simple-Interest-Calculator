  
function compute()
{
    //getting values
    principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate /100;

    //making yearFuture a future date based on inputs
    var yearFuture = new Date().getFullYear() + years;
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" + "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +  "in the year <mark>" + yearFuture + "</mark>";
}

function updateRate() 
{
    //update rate_val based on rate value
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validate(){
    //getting value
    var principal = document.getElementById("principal").value

    //if input value is below 1 give an alert and focus. 
    if (parseInt(principal) < 1){
    alert("Enter a positive number");
    document.getElementById("principal").focus();

}


}