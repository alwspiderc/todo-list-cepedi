import { StyleSheet, Text, View } from 'react-native';
import { LogoIcon } from '../assets';

export function Logo() {
	return (
		<View style={styles.container}>
			<LogoIcon />
			<Text style={styles.text}>Todo List</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 20
	},
	text: {
		marginLeft: 8
	}
});
