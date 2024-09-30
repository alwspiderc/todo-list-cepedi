import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from './CheckBox';
import { Trash } from './Trash';

interface CardProps {
	title: string;
	checked: boolean;
}

export function Card({ title, checked }: CardProps) {
	return (
		<View style={styles.container}>
			<View style={styles.contentCheck}>
				<CheckBox checked={checked} />
				<Text
					style={[
						styles.title,
						{ textDecorationLine: checked ? 'line-through' : 'none' }
					]}
				>
					{title}
				</Text>
			</View>
			<Trash />
		</View>
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
	}
});
