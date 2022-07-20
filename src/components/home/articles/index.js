import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, getMoreArticles } from "../../../store/actions/index";
const HomeScreen = ({ navigation }) => {
  const [loadingMore, setLoadingMore] = useState(false);

  const articles = useSelector((state) => state.articles);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  const renderCard = () => {
    return articles.posts.map((item) => {
      return (
        <TouchableOpacity
          onLongPress={() =>
            navigation.navigate("Article_screen", {
              id: item.id,
              postData: item,
            })
          }
          key={item.id}
        >
          <Card>
            <Card.Title style={styles.cardTitle}>
              <Text>{item.title}</Text>
            </Card.Title>
            <Card.Divider />
            <Text style={styles.cartText}>{item.excerpt}</Text>
          </Card>
        </TouchableOpacity>
      );
    });
  };
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 50;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          if (!loadingMore) {
            setLoadingMore(true);
            dispatch(getMoreArticles(articles)).then(() => {
             
              setLoadingMore(false);
            });
          }
        }
      }}
      scrollEventThrottle={400}
    >
      {articles && articles.posts ? renderCard() : null}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    textAlign: "left",
  },
  cartText: {
    marginBottom: 10,
    marginTop: 10,
  },
});
export default HomeScreen;
