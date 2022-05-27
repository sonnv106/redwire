import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VideosScreen from "../components/home/videos";
import VideoScreen from "../components/home/videos/video";
import HomeScreen from "../components/home/articles";
import AritcleScreen from "../components/home/articles/article";
import { Colors, LogoText } from "../utils/tools";
import { Icon } from "react-native-elements";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const Stack = createNativeStackNavigator();

const LeftIcon = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Icon
        name="menufold"
        type="antdesign"
        color={Colors.white}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};
export const screenOptions = {
  headerTitleAlign: "center",
  headerTintColor: Colors.grey,
  headerStyle: {
    backgroundColor: Colors.black,
  },
  headerTitle: () => <LogoText style={{ fontSize: 25 }} />,
};
export const VideosStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Videos_screen"
      screenOptions={{
        ...screenOptions,
      }}
    >
      <Stack.Screen name="Videos_screen" component={VideosScreen} options={{
          headerLeft: (props) => <LeftIcon />,
        }}/>
      
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home_screen"
      screenOptions={{
        ...screenOptions,
      }}
    >
      <Stack.Screen
        name="Home_screen"
        component={HomeScreen}
        options={{
          headerLeft: (props) => <LeftIcon />,
        }}
      />
      <Stack.Screen name="Article_screen" component={AritcleScreen} />
    </Stack.Navigator>
  );
};
