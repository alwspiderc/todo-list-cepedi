import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckIcon } from '../assets/icons/CheckIcon';

export function CheckBox({
	checked,
	onPress
}: {
	checked: boolean;
	onPress: () => void;
}) {
	return (
		<TouchableOpacity
			style={[styles.container, checked && styles.checked]}
			onPress={onPress}
		>
			<CheckIcon />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 30,
		height: 30,
		backgroundColor: '#F7F7F7',
		borderWidth: 1,
		borderColor: '#494949',
		padding: 20,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5
	},
	checked: {
		backgroundColor: '#F2A516',
		borderColor: '#F7F7F7'
	}
});
