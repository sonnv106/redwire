import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideosScreen from '../components/home/videos';
import VideoScreen from "../components/home/videos/video"
import HomeScreen from '../components/home/articles';
import AritcleScreen from "../components/home/articles/article";


export const Stack = createNativeStackNavigator();

export const VideosStack  = ()=>{
    <Stack.Navigator initialRouteName="Videos_screen">
        <Stack.Screen name="Videos_screen" component={VideosScreen}/>
        <Stack.Screen name="Video_screen" component={VideoScreen}/>
    </Stack.Navigator>
}

export const HomeStack  = ()=>{
    <Stack.Navigator initialRouteName="Home_screen">
        <Stack.Screen name="Home_screen" component={HomeScreen}/>
        <Stack.Screen name="Article_screen" component={AritcleScreen}/>
    </Stack.Navigator>
}