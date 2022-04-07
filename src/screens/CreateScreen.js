import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
     const [title, setTitle] = useState("");
     const [content, setContent] = useState("");

     const { addBlogPost } = useContext(Context);

     return (
          <View>
               <Text style={styles.labelStyle}>Enter Title:</Text>
               <TextInput
                    style={styles.inputStyle}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
               />
               <Text style={styles.labelStyle}>Enter Content</Text>
               <TextInput
                    style={styles.inputStyle}
                    value={content}
                    onChangeText={(text) => setContent(text)}
               />

               <Button
                    onPress={() => {
                         addBlogPost(title, content);
                         navigation.navigate("Index");
                    }}
                    title="Add Blog Post"
               />
          </View>
     );
};

const styles = StyleSheet.create({
     inputStyle: {
          fontSize: 18,
          borderWidth: 2,
          borderColor: "black",
          marginBottom: 15,
          padding: 5,
          margin: 5,
     },
     labelStyle: {
          fontSize: 20,
          marginBottom: 5,
          padding: 5,
     },
});

export default CreateScreen;
