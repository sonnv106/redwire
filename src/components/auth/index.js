import React, { useState, useCallback, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "react-native-elements";
import { LogoText, Colors } from "../../utils/tools";
import { showToast } from "../../utils/tools";
const AuthScreen = () => {
  const [secureEntry, setSecureEntry] = useState(true);
  const [formType, setFormType] = useState(true);
  const handleSubmit = (values) => {
    alert(values)
  };
  useEffect(()=>{
    showToast('error', 'sorry' , ' Faild to sign in')
  },[])
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <LogoText />
        <Formik
          initialValues={{
            email: "sonnguyen106mh@gmail.com",
            password: "testing123",
          }}
          validationSchema={Yup.object({
            email: Yup.string().email().required("The email is required"),
            password: Yup.string()
              .max(10, "Must be 10 or less")
              .required("The password is required"),
          })}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
            errors,
          }) => (
            <>
              <Input
                placeholder="Email"
                leftIcon={{
                  type: "antdesign",
                  name: "mail",
                  color: Colors.white,
                }}
                inputStyle={styles.inputStyle}
                placeholderTextColor={Colors.grey}
                inputContainerStyle={styles.inputContainerStyle}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <Input
                placeholder="Password"
                secureTextEntry={secureEntry}
                leftIcon={{
                  type: "antdesign",
                  name: "lock",
                  color: Colors.white,
                }}
                inputStyle={styles.inputStyle}
                placeholderTextColor={Colors.grey}
                inputContainerStyle={styles.inputContainerStyle}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                rightIcon={{
                  type: "antdesign",
                  name: secureEntry ? "eye" : "eyeo",
                  color: Colors.white,
                  onPress: () => setSecureEntry(!secureEntry),
                }}
              />
              <Button
                title={formType ? "Register" : "Login"}
                buttonStyle={{
                  marginTop: 20,
                  backgroundColor: Colors.black,
                }}
                titleStyle={{ width: "100%" }}
                // loading={}
                // onPress={}
              />
              <Button
                type="clear"
                title={`${!formType ? "Already Registered": "Need to sign in"}`}
                buttonStyle={{
                  marginTop: 20,
                }}
                titleStyle={{ width: "100%", color: Colors.white }}
                // loading={}
                onPress={()=>setFormType(!formType)}
              />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.red,
  },
  container: {
    padding: 50,
    alignItems: "center",
  },
  inputStyle: {
    fontSize: 15,
    color: Colors.white,
  },
  inputContainerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
  },
});
export default AuthScreen;
