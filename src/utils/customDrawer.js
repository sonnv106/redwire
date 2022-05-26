import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Colors, LogoText } from "./tools";
const SideDrawerCustom = (props) => {
  const mainOptions = [
    { title: "News", location: "Home" },
    { title: "Videos", location: "Videos" },
    { title: "Profile", location: "Profile" },
  ];
  return (
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
        onPress={() => alert("Logout")}
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
