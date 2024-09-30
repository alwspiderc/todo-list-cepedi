import { StyleSheet, TouchableOpacity } from 'react-native';
import { FilterIcon } from '../assets';

export function Filter({ onPress }: { onPress: () => void }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
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
