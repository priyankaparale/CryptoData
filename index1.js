let data = [];

async function getCryptoapi() {
    const jsondata = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

    const jsdata = await jsondata.json();
    data = jsdata;
    console.log(data)

    // console.log(response.ok)

    data.forEach((name) => {
        // let image = ${name.image}
        const price_change_24h = name.price_change_24h

        const color = price_change_24h > 0 ? 'green' : 'red'

        data += "<tr>"

        data += `<td style="padding: 15px 15px 20px 15px;"><img src="${name.image}" alt="coin" height="30px" style="margin-left: 50px"/> ${name.name} <td>`

        data += `<td> ${name.symbol.toUpperCase()} <td>`

        data += `<td style="text-align: right"> $${name.current_price} <td>`
        
        data += `<td style="text-align: right "> $${name.total_volume} <td>`;

        data += `<td style="color: brown; text-align: right "> ${name.price_change_24h.toFixed(2)}% <td>`;

        data += `<td> ${name.market_cap} <td>`;"<tr>";
        // console.log(name.name)
        // console.log(name.id)
    })

    document.getElementById("data").innerHTML = data
}
getCryptoapi();