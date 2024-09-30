import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { SearchIcon } from '../assets';

interface Props extends TextInputProps {}
export function Input({ ...TextInputProps }: Props) {
	return (
		<View style={styles.container}>
			<SearchIcon />
			<TextInput
				style={styles.input}
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
		backgroundColor: '#F5F4F8',
		borderRadius: 5,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: '#494949'
	},
	input: {
		flex: 1,
		marginLeft: 16
	}
});
