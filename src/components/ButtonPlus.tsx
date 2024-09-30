import { Text, View, StyleSheet } from 'react-native';

export function ButtonPlus() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>+</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 60,
		height: 60,
		backgroundColor: '#011F26',
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1,
		top: '80%',
		left: '80%',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5
	},
	text: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
	}
});
