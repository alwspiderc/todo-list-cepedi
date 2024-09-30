import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ArrowIcon } from '../assets';

export function ButtonBack() {
	return (
		<TouchableOpacity style={styles.container}>
			<ArrowIcon />
			<Text style={styles.text}>Voltar</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 50
	},
	text: {
		color: '#494949',
		fontSize: 16,
		marginLeft: 8
	}
});
