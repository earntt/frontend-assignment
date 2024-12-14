function check() {
    let compName = document.getElementById("compName");
    let seatAmt = document.getElementById("seatAmount");
    let name = document.getElementById("name");
    let tel = document.getElementById("tel");

    if(compName.value=="")
        alert("Please input a company name.");
    if(seatAmt.value<1 || seatAmt.value>10)
        alert("Please input the seat amount between 1 to 10."); 
    if(name.value=="")
        alert("Please input a name.");
    if(tel.value=="")
        alert("Please input a phone number.");
}
