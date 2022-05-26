import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { color } from "react-native-reanimated";

const ContentShow = () => {
  const text = `<p>Quisque feugiat felis ac sapien posuere, sed laoreet erat egestas. Sed dolor dui, condimentum quis ultrices ac, placerat quis leo. Pellentesque pellentesque vitae lorem at malesuada. Curabitur mattis neque at dui varius, vitae commodo diam commodo. Mauris eleifend dapibus risus eu malesuada. Aenean arcu diam, finibus eget consectetur ac, eleifend non ligula. Vivamus feugiat sapien vel interdum tincidunt. Quisque arcu urna, tristique congue metus nec, blandit auctor odio. Suspendisse sodales suscipit orci, eu luctus arcu blandit vel. Sed eget tincidunt lacus. Donec faucibus semper elit vitae elementum. Sed euismod dolor leo, sed finibus risus semper nec. Cras ornare, justo facilisis molestie aliquet, leo neque laoreet ex, cursus eleifend felis lacus id enim. Proin commodo nisl odio, quis elementum lectus porta a. Quisque vitae fermentum quam. Ut elit ipsum, imperdiet id lacinia non, blandit sit amet purus.</p><p>Quisque feugiat felis ac sapien posuere, sed laoreet erat egestas. Sed dolor dui, condimentum quis ultrices ac, placerat quis leo. Pellentesque pellentesque vitae lorem at malesuada. Curabitur mattis neque at dui varius, vitae commodo diam commodo. Mauris eleifend dapibus risus eu malesuada. Aenean arcu diam, finibus eget consectetur ac, eleifend non ligula. Vivamus feugiat sapien vel interdum tincidunt. Quisque arcu urna, tristique congue metus nec, blandit auctor odio. Suspendisse sodales suscipit orci, eu luctus arcu blandit vel. Sed eget tincidunt lacus. Donec faucibus semper elit vitae elementum. Sed euismod dolor leo, sed finibus risus semper nec. Cras ornare, justo facilisis molestie aliquet, leo neque laoreet ex, cursus eleifend felis lacus id enim. Proin commodo nisl odio, quis elementum lectus porta a. Quisque vitae fermentum quam. Ut elit ipsum, imperdiet id lacinia non, blandit sit amet purus.</p>`;
  return (
    <View>
      <View style={{ padding: 10 }}>
        <Text style={styles.articleTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          posuere vitae tortor ut ultricies.
        </Text>
        <Text style={styles.articleContent}>
          {text.replace(/<p>/g, "").replace(/<\/p>/g, "\n\n")}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  articleTitle: {
    fontSize: 30,
    marginBottom: 30,
    fontWeight: "300",
    color: "#444444",
  },
  articleContent: {
    fontSize: 18,
    color: "#444444",
  },
});
export default ContentShow;
