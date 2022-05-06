import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
const PostDetail = (props) => {
  // Constant value for fields
  const image = props.route.params.urlToImage;
  const description = props.route.params.content;
  const author = props.route.params.author;
  const publishedAt = props.route.params.publishedAt;
  //
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.author}> - {publishedAt}</Text>
      <Text style={styles.author}> - {author}</Text>
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
    display: "flex",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 10,
    borderRadius: 5,
  },
  description: {
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 17,
    textAlign: "justify",
  },
  author: {
    display: "flex",
    alignSelf: "flex-end",
    marginRight: 20,
    fontWeight: "bold",
  },
});
