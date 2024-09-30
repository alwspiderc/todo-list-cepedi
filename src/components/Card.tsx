import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox } from './CheckBox';
import { Trash } from './Trash';

interface CardProps {
	title: string;
	checked: boolean;
	onPress: () => void;
}

export function Card({ title, checked, onPress }: CardProps) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={styles.contentCheck}>
				<CheckBox checked={checked} />
				<Text style={[styles.title, checked && styles.titleChecked]}>
					{title}
				</Text>
			</View>
			<Trash />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 60,
		backgroundColor: '#011F26',
		paddingLeft: 20,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	contentCheck: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		color: 'white',
		fontSize: 14,
		marginLeft: 8
	},
	titleChecked: {
		textDecorationLine: 'line-through'
	}
});
