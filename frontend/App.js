import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import IndivContainer from "./components/IndivContainer";

export default function App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const result = await fetch("http://localhost:5001/stocks");
    json = await result.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        {data !== undefined
          ? data.map((c, index) => <IndivContainer props={c} key={index} />)
          : console.log("loading data.......")}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
