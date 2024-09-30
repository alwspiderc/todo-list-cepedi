import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View
} from 'react-native';
import { SearchIcon } from '../assets';

interface Props extends TextInputProps {
	label: string;
	style?: any;
}
export function Input({ label, style, ...TextInputProps }: Props) {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>

			<TextInput
				style={[styles.container, style]}
				placeholderTextColor="#929292"
				{...TextInputProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		height: 50,
		backgroundColor: '#F7F7F7',
		borderRadius: 5,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: '#494949'
	},
	label: {
		fontSize: 16,
		marginTop: 30,
		marginBottom: 8
	}
});
