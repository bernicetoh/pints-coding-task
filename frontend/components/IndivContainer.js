import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
const { height, width } = Dimensions.get("window");
const IndivContainer = ({ props }) => {
  const { company, symbol, latestPrice, dollarChange, percentChange, imgUrl } =
    props;

  const shortenCompany = (cmpny) => {
    return cmpny.substring(0, 12) + "...";
  };

  const toTwoDp = (number) => {
    return parseFloat(number).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: imgUrl,
        }}
      />
      <View style={styles.companyContainer}>
        <Text style={styles.symbolText}>{symbol}</Text>
        <Text style={styles.companyText}>{shortenCompany(company)}</Text>
      </View>

      <View style={styles.numbersContainer}>
        <Text style={styles.latestPriceText}>${toTwoDp(latestPrice)}</Text>
        <View style={styles.changeContainer}>
          <Text style={[styles.dollarChangeText]}>
            ${toTwoDp(dollarChange)}
          </Text>
          <Text style={styles.percentChangeText}>
            {toTwoDp(percentChange * 100)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default IndivContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width - 60,
    height: 90,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
  },
  symbolText: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
  },
  latestPriceText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  companyContainer: {
    padding: 5,
    position: "absolute",
    left: 65,
  },
  numbersContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: width - 200,
  },
  changeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    borderWidth: 0.5,
    borderColor: "grey",
    position: "absolute",
  },
});
