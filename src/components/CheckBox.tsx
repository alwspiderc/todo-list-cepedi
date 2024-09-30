import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function CheckBox() {
	return (
		<TouchableOpacity style={styles.container}>
			<Text>v</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 30,
		height: 30,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5
	}
});
