// stock market api

document.getElementById("searchButton").addEventListener("click", 
function(){
  let companyName = document.getElementById("stockInput").value;
  console.log(companyName);


    fetchAndDisplayData(companyName);
}
)

function fetchStockData (companyName){
  const apiKey = "SQJ7KNW0DAYCIR59";
  const apiURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${companyName}&apikey=${apiKey}`
  return new Promise((resolve,reject)=>{

    fetch(apiURL)
      .then((response)=>{
        if(!response.ok){
          throw new Error("stock not found");
        }
        const stockData = response.json()
        console.log(stockData)
        return stockData
      })
      .then(data => {
        const stockInfo = data['Global Quote'];
        if (!stockInfo) {
          throw new Error('Invalid response from API');
        }
        resolve(stockInfo);
      })
      .catch(error => reject(error));
  });

}
function displayStockData (stockData){

}

function fetchAndDisplayData(companyName) {
  fetchStockData(companyName)
.then((companyData)=> displayStockData(companyData))
  .catch((error)=>{
    let stockInfo = document.getElementById("dataDisplayDiv");
    stocInfo.innerHTML = `<p>${error.message}</p>`
  });
}



