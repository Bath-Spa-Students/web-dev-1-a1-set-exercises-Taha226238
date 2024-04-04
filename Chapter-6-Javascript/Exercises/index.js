function calculateTotal() {
    var cost = parseFloat(document.getElementById("cost").value);
    var liters = parseFloat(document.getElementById("liters").value);
    var exchangeRate = 3.67; // Exchange rate: 1 USD = 3.67 AED
    var totalCostUSD = cost * liters;
    var totalCostAED = totalCostUSD * exchangeRate;
    document.getElementById("totalCost").innerText = "Total cost: " + totalCostAED.toFixed(2) + " AED";
}