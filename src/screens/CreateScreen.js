import React,{ useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const {createBlog} = useContext(Context);

	return(
		<View>
			<TextInput placeholder="Blog Title" style={styles.title} onChangeText={(text)=> setTitle(text)} />
			<TextInput placeholder="Blog Content" style={styles.content} onChangeText={(text)=> setContent(text)}/>
			<Button title="Add blog" onPress={() => createBlog(title,content, () => {navigation.navigate('Index')})}/>
		</View>
	);
}

const styles = StyleSheet.create({
	title : {
		paddingVertical: 10,
		paddingHorizontal:10,
		fontSize:15,
		borderBottomColor:'rgb(0,0,0)',
		borderBottomWidth:1,
	},

	content : {
		paddingVertical: 10,
		paddingHorizontal:10,
		fontSize:15,
		borderBottomColor:'rgb(0,0,0)',
		borderBottomWidth:1,
	}
});

export default CreateScreen;