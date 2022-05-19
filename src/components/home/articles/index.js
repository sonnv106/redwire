import React from "react";
import { View, Text, Button} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button 
        title="see article"
        onPress={()=>navigation.navigate('Video_screen')}
      /> 
    </View>
  );
};
export default HomeScreen;
