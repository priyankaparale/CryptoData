// async function getFetchData(){
//     await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
//     .then((response) => {
//         response.json()})
//     .then(data => console.log(resp0nse.data))
//     .catch(error => console.log(error))
// }
// getFetchData();


// let api = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
// api.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
// }).then((value2) => {
//     console.log(value2)
// })


// async function getCryptoapi(){
//     const jsondata = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

//     const jsdata = await jsondata.json()
//     console.log(jsdata)
// }
// getCryptoapi();

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false" , {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    console.log(response.status)
    console.log(response.ok)
    const data = response.json()
    if(response.ok){
        let coinsData = data

        if(coinsData.length > 0){
            var cryptCoins =""
        }
        
        //for loop starts
        coinsData.forEach((data) => {
        cryptoCoins += "<tr>"
        cryptoCoins += `<td> ${coin.symbol} <td>`;
        cryptoCoins += `<td> ${coin.id} <td>`;
        cryptoCoins += `<td> ${coin.symbol} <td>`;
        cryptoCoins += `<td> ${coin.symbol} <td>`;
        cryptoCoins += `<td> ${coin.symbol} <td>`;
        cryptoCoins += `<td> ${coin.symbol} <td>`;
    })
        
    }

}).then((value2) => {
    console.log(value2)
})
