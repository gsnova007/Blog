import React, {useContext} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons'; 

const ShowScreen = ({navigation}) => {
	const {state} = useContext(Context);
	const data = state.find((blogdata) => blogdata.id === navigation.getParam('id'));
	return(
		<View>
			<Text>id - {data.id}</Text>
			<Text>Title - {data.title}</Text>
			<Text>{"\n"}{data.content}</Text>
		</View>
	);
}

ShowScreen.navigationOptions = ({navigation}) => {
	return({
		headerRight: () => <TouchableOpacity style={{marginRight:10}} onPress={() => navigation.navigate('Edit',{id : navigation.getParam('id')})}>
			<Entypo name="edit" size={24} color="black" />
		</TouchableOpacity>
	});
}

export default ShowScreen;