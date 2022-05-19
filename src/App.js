import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Stack, HomeStack, VideosStack } from "./routes/stack";

import VideosScreen from "./components/home/videos";
import HomeScreen from "./components/home/articles";
import AuthScreen from "./components/auth";

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Videos" component={VideosStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

class App extends Component {
  render() {
    console.log(this.props.auth);
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {this.props.auth.isAuth ? (
            <>
              <Stack.Screen name="Main" component={MainDrawer} />
            </>
          ) : (
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(App);
