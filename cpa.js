const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
let buttone = document.getElementById("btn");
let fromCurr = document.querySelectorAll(".from select");
let toCurr = document.querySelectorAll(".to select");

for (let select of dropdowns) {
    for (CurrCode in countryList) {
        let newoption = document.createElement("Option");
        newoption.innerText = CurrCode;
        newoption.value = CurrCode;
        if (select.name === "from" && CurrCode === "USD") {
            newoption.selected = "selected";
        }
        else if (select.name === "to" && CurrCode === "INR") {
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    })
}
const updateflag = (element) => {
    let CurrCode = element.value;
    let countryCode = countryList[CurrCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;


}

buttone.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";

    }
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response= await fetch(URL);
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    
    
    
    
   
   
    
});


