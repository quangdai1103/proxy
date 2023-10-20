const express = require('express');
const axios = require('axios').default;

const app = express();
const port = process.env.PORT || 8080;

app.get("/serve", async (req, res)=>{
    try{
        const {src} = req.query;
        const providers = ['nettruyennew.com', 'nettruyenco.vn'];
        const response = await axios.get(src, {
            responseType: 'stream',
            headers: {
              referer: `https://${providers[Math.floor(Math.random() * 2)]}`,
            },
          });
          response.data.pipe(res);
    }catch(err){
        throw err;
    }
})

app.listen(port)