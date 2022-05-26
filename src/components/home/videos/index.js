import React from "react";
import { View, Text, Button, ScrollView,StyleSheet } from "react-native";
import { Tile } from "react-native-elements";

const VideosScreen = ({ navigation }) => {
  const renderVideos = () => {
    return (
      <Tile
        imageSrc={{ uri: "https://picsum.photos/200/300" }}
        title=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        icon={{name: 'play-circle', type: 'font-awesome', color:'#fff', size: 45}}
        titleStyle={{fontSize: 15}}
        containerStyle={styles.containerStyle}
        contentContainerStyle={styles.contentContainerStyle}
        onPress={()=>navigation.navigate('Video_screen',{
          id: 1,
          postData: 'Video 1'
        })}
      />
    );
  };
  return (
    <ScrollView>
      <View>{renderVideos()}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e1e8ee',
    shadowColor: 'rgba(0,0,0,.2)'
  },
  containerStyle: {
    backgroundColor: 'blue',
    width: '100%',
    height: 250, 
    marginBottom: 15
  },
  
})
export default VideosScreen;
