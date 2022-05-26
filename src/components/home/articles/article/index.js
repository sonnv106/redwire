import React from "react";
import { View, Text,ScrollView, ActivityIndicator} from "react-native";
import { Image } from "react-native-elements";
import ContentShow from "../../../../utils/contentShow";
const AritcleScreen = () => {
  return (
    <ScrollView>
      <View>
        <Image source={{uri: 'https://picsum.photos/200/300'}}
        style={{width: '100%', height: 200}}
        PlaceholderContent={<ActivityIndicator/>}/>
        <ContentShow/>
      </View>
    </ScrollView>
  );
};
export default AritcleScreen;
