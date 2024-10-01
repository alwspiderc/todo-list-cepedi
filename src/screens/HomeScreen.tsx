import { useRef } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import {
	ButtonPlus,
	CreateEditModalize,
	FilterModalize,
	Header,
	InputSearch,
	ListTask,
	Logo,
	TaskData
} from '../components';

export function HomeScreen({ navigation }: any) {
	const filterRef = useRef<Modalize>(null);
	const createRef = useRef<Modalize>(null);

	function handleOpenModalizeFilter() {
		filterRef?.current?.open();
	}
	function handleOpenModalizeCreate() {
		createRef?.current?.open();
	}

	function handleGoToDetailsScreen(data: TaskData) {
		navigation.navigate('Details', {
			name: data.name,
			description: data.description,
			checked: data.checked
		});
	}

	function handleDeleteTask(id: number) {
		Alert.alert('Excluir tarefa', 'Deseja realmente excluir esta tarefa?', [
			{
				text: 'Cancelar',
				style: 'cancel'
			},
			{
				text: 'Excluir',
				style: 'destructive',
				onPress: () => {
					// Delete task
				}
			}
		]);
	}

	return (
		<View style={styles.container}>
			<ButtonPlus onPress={handleOpenModalizeCreate} />
			<ListTask
				handleGoToDetailsScreen={handleGoToDetailsScreen}
				handleDeleteTask={handleDeleteTask}
				ListHeaderComponent={
					<>
						<Logo />
						<InputSearch placeholder="Digite sua busca" />
						<Header
							title="Lista de tarefas"
							onPress={handleOpenModalizeFilter}
						/>
					</>
				}
			/>

			<FilterModalize filterRef={filterRef} />
			<CreateEditModalize refModalize={createRef} isEdit={false} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20
	}
});
