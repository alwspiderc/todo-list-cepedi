import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
	StyleProp,
	TextStyle,
	Platform
} from 'react-native';

interface Props extends TextInputProps {
	label: string;
	style?: StyleProp<TextStyle>;
}

export function Input({ label, style, ...TextInputProps }: Props) {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>

			<TextInput
				style={[
					styles.container,
					style,
					TextInputProps.multiline && Platform.OS === 'ios'
						? { height: 'auto', minHeight: 200 }
						: { height: 'auto', maxHeight: 200 }
				]}
				placeholderTextColor="#929292"
				{...TextInputProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		backgroundColor: '#F7F7F7',
		borderRadius: 5,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: '#494949',
		textAlignVertical: 'top',
		paddingVertical: 10
	},
	label: {
		fontSize: 16,
		marginTop: 30,
		marginBottom: 8
	}
});
