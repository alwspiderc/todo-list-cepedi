import { StyleSheet, TouchableOpacity } from 'react-native';
import { TrashIcon } from '../assets';

export function Trash() {
	return (
		<TouchableOpacity style={styles.container}>
			<TrashIcon />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 60,
		height: 60,
		backgroundColor: '#EA3838',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
