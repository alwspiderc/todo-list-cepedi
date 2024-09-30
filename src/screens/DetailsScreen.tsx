import { StyleSheet, Text, View } from 'react-native';
import { ButtonBack } from '../components/ButtonBack';
import { Button } from '../components';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export function DetailsScreen({ route }: Props) {
	const { name, description, checked } = route.params;

	return (
		<View style={styles.container}>
			<View>
				<ButtonBack />
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
			{!checked && <Button title="Editar" />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: 'space-between',
		marginBottom: 50
	},
	title: {
		color: '#494949',
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 45,
		textAlign: 'center'
	},
	description: {
		color: '#494949',
		fontSize: 20,
		marginTop: 20,
		textAlign: 'left',
		lineHeight: 24
	}
});
