import 'react-native-gesture-handler';
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Stack, HomeStack, VideosStack, screenOptions } from "./routes/stack";
import VideosScreen from "./components/home/videos";
import HomeScreen from "./components/home/articles";
import AuthScreen from "./components/auth";
import ProfileScreen from './components/user/profile/profile';
import SideDrawerCustom from './utils/customDrawer';
import VideoScreen from './components/home/videos/video';
import Splash from './components/auth/splash'
import {Colors} from './utils/tools'
import { autoSignin } from './store/actions';
const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props)=><SideDrawerCustom {...props}/>}
      screenOptions={{
        drawerStyle:{
          backgroundColor: Colors.black
        }
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
      <Drawer.Screen name="Videos" component={VideosStack}   options={{headerShown: false}}/>
      <Drawer.Screen name='Profile' component={ProfileScreen} options={{headerShown: false}}/>
    </Drawer.Navigator>
  );
};

class App extends Component {
  state = {
    loading: true
  }
  componentDidMount(){
    this.props.dispatch(autoSignin()).then(()=>{
      this.setState({loading: false})
    })
  }
  render() {
   
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.auth.isAuth ? (
            <>
              <Stack.Screen name="Main" 
              component={MainDrawer} 
              options={{
                headerShown: false
              }}/>
              <Stack.Screen name="VideoScreen" component={VideoScreen}  options={{...screenOptions,
              headerBackTitleVisible: false}} />
            </>
          ) : (
            this.state.loading
            ?
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} /> 
            :
            <Stack.Screen name="AuthScreen" component={AuthScreen} options={{headerShown: false}} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(App);
