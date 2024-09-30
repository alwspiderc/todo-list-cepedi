import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ArrowIcon } from '../assets';
import { useNavigation } from '@react-navigation/native';

export function ButtonBack() {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<TouchableOpacity style={styles.container} onPress={handleGoBack}>
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
