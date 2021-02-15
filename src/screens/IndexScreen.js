import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons'; 

const IndexScreen = ({navigation}) => {
  const { state, createBlog, deleteBlog, getBlogs } = useContext(Context);
  useEffect(()=> { getBlogs();},[]);
  return (
    <View>
      
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={() => navigation.navigate('Show',{ id: item.id})}>
            <View style={styles.blogview}>
              <Text>{item.title}</Text>
              <Text>{item.id}</Text>
              <TouchableOpacity styles={styles.touchable} onPress={() => deleteBlog(item.id)}>
                <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return({
    headerRight : () => <TouchableOpacity style={{marginRight:10}} onPress={() => navigation.navigate('Create')}>
      <AntDesign name="plus" size={24} color="black" />
    </TouchableOpacity>
  });
}

const styles = StyleSheet.create({
  blogview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    borderBottomColor:'rgb(0,0,0)',
    marginVertical: 10,
    padding:10
  },
  touchable:{

  },
});

export default IndexScreen;
