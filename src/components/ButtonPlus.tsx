import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function ButtonPlus() {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.content}
				onPress={() => console.log('criar task')}
			>
				<Text style={styles.text}>+</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 60,
		height: 60,
		backgroundColor: '#011F26',
		borderRadius: 30,
		zIndex: 1,
		top: '85%',
		left: '80%',
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5
	},
	content: {
		width: 60,
		height: 60,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#F5F4F8'
	},
	text: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
	}
});
