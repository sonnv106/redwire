import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { color } from "react-native-reanimated";

const ContentShow = ({params}) => {
  return (
    <View>
      <View style={{ padding: 10 }}>
        <Text style={styles.articleTitle}>
            {params.postData.title}
        </Text>
        <Text style={styles.articleContent}>
          {params.postData.content.replace(/<p>/g, "").replace(/<\/p>/g, "\n\n")}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  articleTitle: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: "300",
    color: "#444444",
  },
  articleContent: {
    fontSize: 18,
    color: "#444444",
  },
});
export default ContentShow;
