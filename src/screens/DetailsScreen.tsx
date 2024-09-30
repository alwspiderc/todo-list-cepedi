import { StyleSheet, Text, View } from 'react-native';
import { ButtonBack } from '../components/ButtonBack';
import { Button, CreateEditModalize } from '../components';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRef } from 'react';
import { Modalize } from 'react-native-modalize';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export function DetailsScreen({ route }: Props) {
	const task = route.params;
	const editRef = useRef<Modalize>(null);
	function handleOpenModalizeEdit() {
		editRef.current?.open();
	}
	return (
		<View style={styles.container}>
			<View>
				<ButtonBack />
				<Text style={styles.title}>{task.name}</Text>
				<Text style={styles.description}>{task.description}</Text>
			</View>
			{!task.checked && (
				<Button title="Editar" onPress={handleOpenModalizeEdit} />
			)}

			<CreateEditModalize refModalize={editRef} task={task} isEdit />
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
