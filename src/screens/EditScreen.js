import React,{ useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
	const {state, updateBlog } = useContext(Context);
	const id = navigation.getParam('id');
	const data = state.find((allblogs) => allblogs.id === id);
	const [title, setTitle] = useState(data.title);
	const [content, setContent] = useState(data.content);
	return(
		<View>
			<TextInput placeholder="Edit Title" style={styles.title} onChangeText={(text)=> setTitle(text)} value={title}/>
			<TextInput placeholder="Edit Content" style={styles.content} onChangeText={(text)=> setContent(text)} value={content}/>
			<Button title="Edit blog" onPress={() => updateBlog(id, title, content, () => {navigation.pop()})}/>
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

export default EditScreen;