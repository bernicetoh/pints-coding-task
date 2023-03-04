require("dotenv").config();
const express = require("express");
const app = express();
app.listen(5001, () => console.log("Listening on port 5001"));

app.get("/stocks", async (req, res) => {
  const apple = await getAppleData();
  const netflix = await getNetflixData();
  const amazon = await getAmazonData();
  const google = await getGoogleData();
  const tesla = await getTeslaData();
  res.send([apple, netflix, amazon, google, tesla]);
});

const getAppleData = async () => {
  const url = `https://api.iex.cloud/v1/data/CORE/QUOTE/AAPL?token=sk_d5e0c93b5d2d403598570508dd0c645c`;
  const result = await fetch(url);
  const json = await result.json();
  const data = {
    company: json[0].companyName,
    symbol: json[0].symbol,
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/AAPL.png",
  };
  return data;
};

const getNetflixData = async () => {
  const url =
    "https://api.iex.cloud/v1/data/CORE/QUOTE/NFLX?token=sk_d5e0c93b5d2d403598570508dd0c645c";
  const result = await fetch(url);
  const json = await result.json();
  const data = {
    company: json[0].companyName,
    symbol: json[0].symbol,
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/NFLX.png",
  };
  return data;
};

const getGoogleData = async () => {
  const url =
    "https://api.iex.cloud/v1/data/CORE/QUOTE/GOOG?token=sk_d5e0c93b5d2d403598570508dd0c645c";
  const result = await fetch(url);
  const json = await result.json();
  const data = {
    company: json[0].companyName,
    symbol: json[0].symbol,
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/GOOG.png",
  };
  return data;
};

const getAmazonData = async () => {
  const url =
    "https://api.iex.cloud/v1/data/CORE/QUOTE/AMZN?token=sk_d5e0c93b5d2d403598570508dd0c645c";
  const result = await fetch(url);
  const json = await result.json();
  const data = {
    company: json[0].companyName,
    symbol: json[0].symbol,
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/AMZN.png",
  };
  return data;
};

const getTeslaData = async () => {
  const url =
    "https://api.iex.cloud/v1/data/CORE/QUOTE/TSLA?token=sk_d5e0c93b5d2d403598570508dd0c645c";
  const result = await fetch(url);
  const json = await result.json();
  const data = {
    company: json[0].companyName,
    symbol: json[0].symbol,
    latestPrice: json[0].latestPrice,
    dollarChange: json[0].change,
    percentChange: json[0].changePercent,
    imgUrl: "https://storage.googleapis.com/iex/api/logos/TSLA.png",
  };
  return data;
};
