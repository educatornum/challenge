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
            const response2 = await axios.get('https://poloniex.com/public?command=returnTicker')
            // console.log("response2",typeof response2);
            // console.log("response2",response2);
            var obj = {a: 1, b: 2, c: 'something'};

            // caching map
            var objMap = new Map(Object.entries(response2));

            // fast iteration on Map object
            objMap.forEach((item, key) => {
            // do something with an item
                console.log(item);
            });
            // const data = response2.list.find( record => record.name === "BTC_ETH")
            // let data = {
            //     "list": [
            //       {"name":"my Name","id":12,"type":"car owner"},
            //       {"name":"my Name2","id":13,"type":"car owner2"},
            //       {"name":"my Name4","id":14,"type":"car owner3"},
            //       {"name":"my Name4","id":15,"type":"car owner5"}
            //    ]}
            // console.log("results",data);
            const response = await axios.get('https://api.bittrex.com/api/v1.1/public/getmarketsummary?market=btc-eth')
            // console.log(response.data.result);

            // const data = response.data
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

