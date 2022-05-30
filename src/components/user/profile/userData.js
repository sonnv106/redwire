import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Appbar, TextInput, Divider, Button, Title } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

const UserData = () => {
  const handleSubmit = (values) => {
      console.log(values)
    alert(JSON.stringify(values));
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: "",
        lastname: "",
        age: "",
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
            <Button onPress={handleSubmit} mode="contained">
              Update
            </Button>
          </View>
        );
      }}
    </Formik>
  );
};
export default UserData;
