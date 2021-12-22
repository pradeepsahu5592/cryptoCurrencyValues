// function getData(){
//     url = "data.json";
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         parse
//         console.log(data.name);
//     })
// }
// getData();

// ...................................

const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");
const aergo = document.getElementById("aergo");
const btn = document.getElementById("btn");
const wazirx = document.getElementById("wazirx");
const polkadot = document.getElementById("polkadot");


btn.addEventListener("click",()=>{
    var settings = {
        "async" : true,
        "scrossDomain" : true,
        "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Caergo%2Cwazirx%2Cpolkadot&vs_currencies=usd",
        "method" : "GET",
        "headers" :{}
    }
    
    $.ajax(settings).done(function(response){
        console.log(response);
        bitcoin.innerHTML =`$ ${response.bitcoin.usd}`;
        ethereum.innerHTML =`$ ${Math.round(response.ethereum.usd)}`;
        dogecoin.innerHTML =`$ ${response.dogecoin.usd}`;
        aergo.innerHTML =`$ ${response.aergo.usd}`;
        wazirx.innerHTML =`$ ${response.wazirx.usd}`;
        polkadot.innerHTML=`$ ${response.polkadot.usd}`;
    })
})