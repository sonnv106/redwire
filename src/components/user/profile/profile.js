import React from "react";
import { View, Text, ScrollView } from "react-native";
import {Appbar, TextInput, Divider, Button, Title} from 'react-native-paper';
import UserData from "./userData";
const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Appbar.Header>
          <Appbar.BackAction onPress={()=>alert('back')}/>
          <Appbar.Content title="Profile" subtitle="redwire"/>
      </Appbar.Header>
      <View style={{padding: 20}}> 
        <Title>Your user Login data</Title>
        <TextInput
          label={'Email'}
          value={''}
          mode="outlined"
          onChangeText={(text)=> conssole.log('hey')}
        />
        <TextInput
          label={'Password'}
          value={''}
          mode="outlined"
          onChangeText={(text)=> conssole.log('hey')}
        />
        <Button 
        mode="contained"
        onPress={()=>console.log('press')}>
          Update
        </Button>
      </View>
      <Divider/>
      <UserData/>
    </ScrollView>
  );
};
export default ProfileScreen;