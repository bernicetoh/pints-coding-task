const express = require("express");
const app = express();
const API_key = process.env.IEX_API_KEY;

app.get("/stocks/apple", async (req, res) => {
  const url = `https://api.iex.cloud/v1/data/CORE/QUOTE/AAPL?token=sk_d5e0c93b5d2d403598570508dd0c645c`;
  const result = await fetch(url);
  const json = await result.json();
  res.send({
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/AAPL.png",
  });
});

app.get("/stocks/netflix", async (req, res) => {
  const url = `https://api.iex.cloud/v1/data/CORE/QUOTE/NFLX?token=sk_d5e0c93b5d2d403598570508dd0c645c`;
  const result = await fetch(url);
  const json = await result.json();
  res.send({
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/NFLX.png",
  });
});

app.get("/stocks/google", async (req, res) => {
  const url = `https://api.iex.cloud/v1/data/CORE/QUOTE/GOOG?token=sk_d5e0c93b5d2d403598570508dd0c645c`;
  const result = await fetch(url);
  const json = await result.json();
  res.send({
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/GOOG.png",
  });
});

app.get("/stocks/amazon", async (req, res) => {
  const url = `https://api.iex.cloud/v1/data/CORE/QUOTE/AMZN?token=sk_d5e0c93b5d2d403598570508dd0c645c`;
  const result = await fetch(url);
  const json = await result.json();
  res.send({
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/AMZN.png",
  });
});

app.get("/stocks/tesla", async (req, res) => {
  const url = `https://api.iex.cloud/v1/data/CORE/QUOTE/TSLA?token=sk_d5e0c93b5d2d403598570508dd0c645c`;
  const result = await fetch(url);
  const json = await result.json();
  res.send({
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/TSLA.png",
  });
});

app.listen(5001, () => console.log(API_key));
