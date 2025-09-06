let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let dodge = document.getElementById("dodgecoin");




let settings = {
    "async": true,
    "scorssDomain": true,
    "url":"https//api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdodgecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    btc.innerHTML = response.ethereum.usd;
    btc.innerHTML = response.dodgecoin.usd;

});