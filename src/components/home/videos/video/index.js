import React from "react";
import { View, Text, ScrollView } from "react-native";
import ContentShow from '../../../../utils/contentShow'
import YouTube from "react-native-youtube";
import { useRoute } from "@react-navigation/native";
const VideoScreen = () => {
  const {params} = useRoute()
  return (
    <ScrollView>
      <YouTube apiKey="AIzaSyB4IZhZ2X3uUE3Rcqb7n58V-0w5Wc6BSUU"
      videoId= {params.postData.videoId}
      style={{alignSelf: 'stretch', height: 300}}
      play={false}
      onReady = {e=>console.log('ready')}
      onChangeState={e=> console.log(e)}
      onError={(error)=>console.log(error)}/>
      <ContentShow params={params}/>
    </ScrollView>
  );
};
export default VideoScreen;
