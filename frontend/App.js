import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import IndivContainer from "./components/IndivContainer";

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/stocks")
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setData(result);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          data.map((c, key) => {
            return <IndivContainer props={c} key={key} />;
          })
        )}
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
