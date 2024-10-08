import { useRef } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { useTasks } from '../context';

export function HomeScreen({ navigation }: any) {
	const { tasks, setTasks, setEditTask, loadTasks, setStatus } = useTasks();
	const filterRef = useRef<Modalize>(null);
	const createRef = useRef<Modalize>(null);

	function handleOpenModalizeFilter() {
		filterRef?.current?.open();
		setStatus('all');
		loadTasks();
	}
	function handleOpenModalizeCreate() {
		createRef?.current?.open();
	}

	function handleGoToDetailsScreen(data: TaskData) {
		setEditTask(data);
		navigation.navigate('Details');
	}

	function handleDeleteTask(id: string) {
		Alert.alert('Excluir tarefa', 'Deseja realmente excluir esta tarefa?', [
			{
				text: 'Cancelar',
				style: 'cancel'
			},
			{
				text: 'Excluir',
				style: 'destructive',
				onPress: () => {
					const updatedTasks = tasks?.filter((task) => task.id !== id);
					AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
					setTasks(updatedTasks);
				}
			}
		]);
	}

	return (
		<View style={styles.container}>
			<ButtonPlus onPress={handleOpenModalizeCreate} />

			<ListTask
				tasks={tasks}
				handleGoToDetailsScreen={handleGoToDetailsScreen}
				handleDeleteTask={handleDeleteTask}
				ListHeaderComponent={
					<>
						<Logo />
						{/* <InputSearch placeholder="Digite sua busca" /> */}
						<Header
							title="Lista de tarefas"
							onPress={handleOpenModalizeFilter}
						/>
					</>
				}
			/>

			{/* <FilterModalize filterRef={filterRef} /> */}
			<CreateEditModalize refModalize={createRef} isEdit={false} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingBottom: 20
	}
});
