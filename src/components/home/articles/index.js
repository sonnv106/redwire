import React from "react";
import { View, Text, Button, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
const HomeScreen = ({ navigation }) => {
  const renderCard = () => {
    return (
      <TouchableOpacity onLongPress={()=>navigation.navigate('Article_screen',{
        id: 1,
        postData: 'Hello world'
      })}>
        <Card>
          <Card.Title style={styles.cardTitle}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Text>
          </Card.Title>
          <Card.Divider />
          <Text style={styles.cartText}>
            Quisque posuere vitae tortor ut ultricies. Mauris eros magna,
            finibus ut sollicitudin et, molestie sit amet risus. Donec gravida
            fermentum purus, eu auctor massa auctor congue. Pellentesque sit
            amet finibus diam. Proin lacus sapien, tempus vel orci in, euismod
            convallis leo. Ut blandit sodales massa a vestibulum. Etiam a
            aliquet libero, nec tincidunt magna. In egestas, lorem quis eleifend
            vehicula, neque tellus feugiat nulla, ac ornare justo turpis non
            turpis. 
          </Text>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      {renderCard()}
      {renderCard()}
      {renderCard()}
    </ScrollView>
  );
};
const styles  = StyleSheet.create({
  cardTitle:{
    fontSize: 20,
    textAlign: 'left'
  },
  cartText:{
    marginBottom: 10, 
    marginTop: 10
  }
})
export default HomeScreen;
