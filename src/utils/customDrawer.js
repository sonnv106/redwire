import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Colors, LogoText } from "./tools";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/actions";
const SideDrawerCustom = (props) => {
  const dispatch = useDispatch()
  //danh sách stack
  const mainOptions = [
    { title: "News", location: "Home" },
    { title: "Videos", location: "Videos" },
    { title: "Profile", location: "Profile" },
  ];
  return (
    //nội dung của thanh drawer navigation
    <DrawerContentScrollView {...props} >
      <View>
        <LogoText/>
      </View>
      {mainOptions.map((item) => (
        <Button
          key={item.location}
          title={item.title}
          onPress={() => props.navigation.navigate(item.location)}
          buttonStyle={styles.drawerButton}
          titleStyle={{ width: "100%" }}
        />
      ))}
      <Button
        title={"Logout"}
        onPress={() => dispatch(logoutUser())}
        buttonStyle={styles.drawerButton}
      />
    </DrawerContentScrollView>
  );
};
export default SideDrawerCustom;
const styles = StyleSheet.create({
  drawerButton: {
    backgroundColor: Colors.black,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black2,
  },
});
