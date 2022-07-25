import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { Tile } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getVideos, getMoreVideos } from "../../../store/actions";

const VideosScreen = ({ navigation }) => {
  const [loadingMore, setLoadingMore] = useState(false);
  const articles = useSelector((state) => state.articles);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);
  const renderVideos = () => {
    return articles.videos.map((item) => (
      <Tile
        key={item.id}
        imageSrc={{ uri: item.images }}
        title={item.title}
        icon={{
          name: "play-circle",
          type: "font-awesome",
          color: "#fff",
          size: 45,
        }}
        titleStyle={{ fontSize: 15 }}
        containerStyle={styles.containerStyle}
        contentContainerStyle={styles.contentContainerStyle}
        onPress={() =>
          navigation.navigate("VideoScreen", {
            id: item.id,
            postData: item,
          })
        }
      />
    ));
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
    <ScrollView onScroll={({nativeEvent})=>{
      if(isCloseToBottom(nativeEvent)){
        if(!loadingMore){
          setLoadingMore(true);
          dispatch(getMoreVideos(articles)).then(()=>{
            setLoadingMore(false)
          })

        }
      }
    }} 
    scrollEventThrottle={400}>
      <View>
        {articles && articles.videos ? renderVideos() : null}
        {loadingMore? <View style={{marginVertical: 50}}>
        <ActivityIndicator size={'small'} color={'black'}/>
      </View>: null}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e1e8ee",
    shadowColor: "rgba(0,0,0,.2)",
  },
  containerStyle: {
    backgroundColor: "blue",
    width: "100%",
    height: 250,
    marginBottom: 15,
  },
});
export default VideosScreen;
