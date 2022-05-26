import React from "react";
import { View, Text, ScrollView } from "react-native";
import ContentShow from '../../../../utils/contentShow'
import YouTube from "react-native-youtube";
const VideoScreen = () => {
  return (
    <ScrollView>
      <YouTube apiKey="AIzaSyB4IZhZ2X3uUE3Rcqb7n58V-0w5Wc6BSUU"
      videoId="x6ZeLDkvBmo" 
      style={{alignSelf: 'stretch', height: 300}}/>
      <ContentShow/>
    </ScrollView>
  );
};
export default VideoScreen;
