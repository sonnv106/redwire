import React, { useEffect, useState, useCallback } from "react";
import { View, Text, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Appbar, TextInput, Divider, Button, Title } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { showToast } from "../../../utils/tools";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData, clearAuthError } from "../../../store/actions/index";
const UserData = () => {
  const [loading, setLoading] = useState(false);
  const error = useSelector((state) => state.auth.error);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    setLoading(true);
    dispatch(updateUserData(values, user)).then(({ payload }) => {
      console.log("paypay", payload)
      setLoading(false);
      if (payload.error) {
        showToast("error", "Ups !!", "Try again later");
      } else {
        showToast("success", "Congratulations", "Your profile was updated");
        
      }
    });
  };
  useEffect(() => {
    if (error) {
    }
  }, [error]);
  useFocusEffect(
    useCallback(()=>{
      return ()=> dispatch(clearAuthError())
    },[])
  )
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: user.name ? user.name : "",
        lastname: user.lastname ? user.lastname : "",
        age: user.age ? user.age : "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("The name is required"),
        lastname: Yup.string().required("The last name is required"),
        age: Yup.number().required("The age is required"),
      })}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        touched,
        errors,
      }) => {
        return (
          <View style={{ padding: 20 }}>
            <TextInput
              label={"Name"}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              error={errors.name && touched.name ? true : false}
              mode="flat"
            />
            <TextInput
              label={"Last name"}
              onChangeText={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
              value={values.lastname}
              error={errors.lastname && touched.lastname ? true : false}
              mode="flat"
            />
            <TextInput
              label={"Age"}
              onChangeText={handleChange("age")}
              onBlur={handleBlur("age")}
              value={values.age}
              error={errors.age && touched.age ? true : false}
              mode="flat"
            />
            <Button
              onPress={handleSubmit}
              mode="contained"
              disabled={loading}
              loading={loading}
            >
              Update
            </Button>
          </View>
        );
      }}
    </Formik>
  );
};
export default UserData;
