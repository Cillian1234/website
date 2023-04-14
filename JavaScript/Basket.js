    const namesID = [
        ["cpuName", "gpuName", "motherboardName", "ramName", "caseName", "ssdName"],
        ["cpuNameBasket", "gpuNameBasket", "motherboardNameBasket", "ramNameBasket", "caseNameBasket", "ssdNameBasket"]
    ];
    const names = ["Intel core i7", "Nvidia graphics card probably", "Motherboard", "Ram", "Cutesy pink case", "SSD"];

    const quantityID = ["cpuQuantity", "gpuQuantity", "motherboardQuantity", "ramQuantity", "caseQuantity", "ssdQuantity", "total"];
    let storageItems = [localStorage.getItem("cpuQuantity"), localStorage.getItem("gpuQuantity"), localStorage.getItem("motherboardQuantity"), localStorage.getItem("ramQuantity"), localStorage.getItem("caseQuantity"), localStorage.getItem("ssdQuantity"), localStorage.getItem("total")];

function startup() {
    let arrayLength = names.length;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < arrayLength; j++) {
            document.getElementById(namesID[i][j]).innerHTML = names[j];
        }
    }
}

function checkoutSetup() {
    let arrayLength = names.length;
        for (let j = 0; j < arrayLength; j++) {
            document.getElementById(namesID[0][j]).innerHTML = names[j];
        }

    for (let i = 0; i < quantityID.length; i++) {
        document.getElementById(quantityID[i]).value = storageItems[i];
    }
    document.getElementById("total").innerHTML = '€'+localStorage.getItem("total");
    /* This for loop for all I can see should also set the total value, but for some reason won't unless I do this. I don't know... */
}

function cpuTotal() {
    const cpuPrice = 550;
    let cpuAmount = document.querySelector("#cpuQuantity").value;
    localStorage.setItem("cpuQuantity", String(cpuAmount));
    let cpuCost = cpuPrice*cpuAmount;
    document.getElementById("cpuSubtotal").innerHTML = 'Subtotal: €'+cpuCost;
    document.getElementById("cpuQuantityBask").innerHTML = "Quantity: "+cpuAmount;
    return cpuCost;
}
function gpuTotal() {
    const gpuPrice = 850;
    let gpuAmount = document.querySelector("#gpuQuantity").value;
    localStorage.setItem("gpuQuantity", String(gpuAmount));
    let gpuCost = gpuPrice*gpuAmount;
    document.getElementById("gpuSubtotal").innerHTML = 'Subtotal: €'+gpuCost;
    document.getElementById("gpuQuantityBask").innerHTML = "Quantity: "+gpuAmount;
    return gpuCost;
}
function motherboardTotal() {
    const motherboardPrice = 200;
    let motherboardAmount = document.querySelector("#motherboardQuantity").value;
    localStorage.setItem("motherboardQuantity", String(motherboardAmount));
    let motherboardCost = motherboardPrice*motherboardAmount;
    document.getElementById("motherboardSubtotal").innerHTML = 'Subtotal: €'+motherboardCost;
    document.getElementById("motherboardQuantityBask").innerHTML = "Quantity: "+motherboardAmount;
    return motherboardCost;
}
function ramTotal() {
    const ramPrice = 120;
    let ramAmount = document.querySelector("#ramQuantity").value;
    localStorage.setItem("ramQuantity", String(ramAmount));
    let ramCost = ramPrice*ramAmount;
    document.getElementById("ramSubtotal").innerHTML = 'Subtotal: €'+ramCost;
    document.getElementById("ramQuantityBask").innerHTML = "Quantity: "+ramAmount;
    return ramCost;
}
function caseTotal() {
    const casePrice = 2400;
    let caseAmount = document.querySelector("#caseQuantity").value;
    localStorage.setItem("caseQuantity", String(caseAmount));
    let caseCost = casePrice*caseAmount;
    document.getElementById("caseSubtotal").innerHTML = 'Subtotal: €'+caseCost;
    document.getElementById("caseQuantityBask").innerHTML = "Quantity: "+caseAmount;
    return caseCost;
}
function ssdTotal() {
    const ssdPrice = 240;
    let ssdAmount = document.querySelector("#ssdQuantity").value;
    localStorage.setItem("ssdQuantity", String(ssdAmount));
    let ssdCost = ssdPrice*ssdAmount;
    document.getElementById("ssdSubtotal").innerHTML = 'Subtotal: €'+ssdCost;
    document.getElementById("ssdQuantityBask").innerHTML = "Quantity: "+ssdAmount;
    return ssdCost;
}

function totalFunc() {
    localStorage.setItem("total", String((cpuTotal()+gpuTotal()+motherboardTotal()+ramTotal()+caseTotal()+ssdTotal())))
    document.getElementById("total").innerHTML = 'Total: €'+(cpuTotal()+gpuTotal()+motherboardTotal()+ramTotal()+caseTotal()+ssdTotal());
}