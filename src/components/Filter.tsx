import { StyleSheet, TouchableOpacity } from 'react-native';
import { FilterIcon } from '../assets';

export function Filter() {
	return (
		<TouchableOpacity style={styles.container}>
			<FilterIcon />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 30,
		height: 30,
		borderRadius: 50,
		backgroundColor: '#011F26',

		justifyContent: 'center',
		alignItems: 'center'
	}
});
