import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

const Entertainment = ({ navigation }) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=entertainment&from=2022-04-06&sortBy=publishedAt&apiKey=4bac383e252c4a859eec5a704e48a296"
    );
    const resData = await res.json();
    const finalData = resData.articles;
    setData(finalData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <View style={styles.views}>
              <Image
                source={{ uri: item.urlToImage }}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  aspectRatio: 1,
                }}
              />
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Entertainment;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    aspectRatio: 1,
    borderRadius: 15,
  },
  titleText: {
    fontWeight: "bold",
    paddingRight: 100,
    marginHorizontal: 15,
  },
  views: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
  },
});
