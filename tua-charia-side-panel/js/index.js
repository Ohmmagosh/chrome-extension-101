function showResult() {}

function showErrorMessages(errorId, message) {
  const errorMessages = document.getElementById(errorId);
  errorMessages.innerText = message;
}

function clearErrorMessages(data) {
  Object.keys(data).forEach((key) => {
    const errorMessages = document.getElementById(`${key}-errors`);
    errorMessages.innerText = "";
  });
}

document.getElementById("form-input").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = ({
    "current-quant": currentQuant,
    "current-price-avg": currentPriceAvg,
    "quant-buy": quantBuy,
    "new-price": newPrice,
  } = Object.fromEntries(new FormData(e.target).entries()));
  clearErrorMessages(data);

  Object.keys(data).forEach((key) => {
    const errorObj = {
      "current-quant": "โปรดกรอกราคาปัจจุบัน",
      "current-price-avg": "โปรดกรอกราคาเฉลี่ย",
      "quant-buy": "โปรดกรอกจำนวนหุ้น",
      "new-price": "โปรดกรอกราคาหุ้นใหม่",
    };
    //clear error message
    console.log(key, data[key]);
    if (data[key] === "" || parseFloat(data[key]) === 0) {
      showErrorMessages(`${key}-errors`, errorObj[key]);
      return;
    }
  });

 
  currentQuant = parseFloat(currentQuant);
  currentPriceAvg = parseFloat(currentPriceAvg);
  quantBuy = parseFloat(quantBuy);
  newPrice = parseFloat(newPrice);
  

  const totalStock = currentQuant + quantBuy;
  const totalCost = (currentQuant * currentPriceAvg )+ (quantBuy * newPrice);
  const totalAvg = totalCost / totalStock;

  const result = document.getElementById("result");

  result.innerHTML = `
  <h1>จำนวนหุ้นทั้งหมด: ${totalStock}</h1>  
  <h1>ราคาเฉลี่ยใหม่: ${totalAvg.toFixed(2)}</h1>
    `
  ;

});
