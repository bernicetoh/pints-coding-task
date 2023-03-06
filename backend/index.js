require("dotenv").config();
const express = require("express");
const app = express();
const API_KEY = process.env.IEX_API_KEY;
app.listen(5001, () => console.log("Listening on port 5001"));

app.get("/stocks", async (req, res) => {
  const apple = await getData("AAPL");
  const netflix = await getData("NFLX");
  const amazon = await getData("AMZN");
  const google = await getData("GOOG");
  const tesla = await getData("TSLA");
  res.send([apple, netflix, amazon, google, tesla]);
});

const getData = async (company) => {
  const url = `https://api.iex.cloud/v1/data/CORE/QUOTE/${company}?token=${API_KEY}`;
  const result = await fetch(url);
  const json = await result.json();
  const data = {
    company: json[0].companyName,
    symbol: json[0].symbol,
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: `https://storage.googleapis.com/iex/api/logos/${company}.png`,
  };
  return data;
};
