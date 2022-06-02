import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Colors } from "../../utils/tools";

const Splash = ()=>(
    <View style={styles.contentContainer}>
        <ActivityIndicator color={Colors.black}/>
    </View>
)
const styles = StyleSheet.create({
    contentContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.red
    }
})
export default Splash;