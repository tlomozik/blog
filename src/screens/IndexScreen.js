import React, { useContext } from "react";
import {
     View,
     Text,
     StyleSheet,
     FlatList,
     Button,
     TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
     const { state, addBlogPost, deleteBlogPost } = useContext(Context);

     return (
          <View>
               <Button title="Add Post" onPress={addBlogPost} />
               <FlatList
                    data={state}
                    keyExtractor={(blogPost) => blogPost.title}
                    renderItem={({ item }) => {
                         return (
                              <TouchableOpacity
                                   onPress={() =>
                                        navigation.navigate("Show", {
                                             id: item.id,
                                        })
                                   }
                              >
                                   <View style={styles.rowStyle}>
                                        <Text style={styles.titleStyle}>
                                             {item.title} - {item.id}
                                        </Text>
                                        <TouchableOpacity
                                             onPress={() =>
                                                  deleteBlogPost(item.id)
                                             }
                                        >
                                             <Feather
                                                  name="trash-2"
                                                  style={styles.iconStyle}
                                                  color="black"
                                             />
                                        </TouchableOpacity>
                                   </View>
                              </TouchableOpacity>
                         );
                    }}
               />
          </View>
     );
};

IndexScreen.navigationOptions = ({ navigation }) => {
     return {
          headerRight: () => (
               <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                    <AntDesign name="plus" size={24} color="black" />
               </TouchableOpacity>
          ),
     };
};

const styles = StyleSheet.create({
     rowStyle: {
          top: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderTopWidth: 2,
          borderColor: "grey",
     },
     titleStyle: {
          fontSize: 18,
     },
     iconStyle: {
          fontSize: 30,
     },
});

export default IndexScreen;
