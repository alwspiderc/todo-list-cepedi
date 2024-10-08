import { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { Button, CreateEditModalize, ButtonBack } from '../components';
import { useTasks } from '../context';

export function DetailsScreen() {
	const { aditTask } = useTasks();
	const editRef = useRef<Modalize>(null);
	function handleOpenModalizeEdit() {
		editRef.current?.open();
	}

	return (
		<View style={styles.container}>
			<View>
				<ButtonBack />
				<Text style={styles.title}>{aditTask?.name}</Text>
				<Text style={styles.description}>{aditTask?.description}</Text>
			</View>
			{!aditTask?.checked && (
				<Button
					title="Editar"
					onPress={handleOpenModalizeEdit}
					isValid={true}
				/>
			)}

			<CreateEditModalize refModalize={editRef} task={aditTask} isEdit={true} />
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
