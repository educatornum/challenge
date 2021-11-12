// const MyError = require("../utils/myError")
// const asyncHandler =  require("../middleware/asyncHandler")

// var http = require('http');    
// var urls = ["http://api.bittrex.com/api/v1.1/public/getmarketsummary?market=btc-eth", "http://api.bittrex.com/api/v1.1/public/getmarketsummary?market=btc-doge"];
// var responses = [];
// var completed_requests = 0;

// for (i in urls) {
//     http.get(urls[i], function(res) {
//         responses.push(res);
//         completed_requests++;
//         if (completed_requests == urls.length) {
//             console.log(responses);
//         }
//     });
// }
const axios = require('axios');

exports.apiPOST =  async (req,res,next) => {
    console.log(`data : ${req.body.username}`);
    res.status(200).json({
        method: "POST",
        success: true,
        data:"POST TEST"
    })
}
exports.apiGET = (req,res,next) => {
    (async () => {
        try {
            
            const response = await axios.get('https://api.bittrex.com/api/v1.1/public/getmarketsummary?market=btc-eth')
            // console.log(response.data.result);

            const dataMap = response.data.result.map(a => ({ 
                MarketName: a.MarketName, 
                High: a.High, 
                Low:a.Low,
                Volume:a.Volume,
                TimeStamp:a.TimeStamp,
                Bid:a.Bid,
                Ask:a.Ask,
                OpenBuyOrders:a.OpenBuyOrders,
                OpenSellOrders:a.OpenSellOrders,
                
            }))
            res.status(200).json({
                method: "GET",
                success: true,
                data: dataMap
            })
        } catch (error) {
            console.log(error.response.body);
        }
    })();
    
}

