import { ReactElement } from 'react';
import { FlatList, Text } from 'react-native';
import data from '../mock/tasks.json';
import { Card } from './Card';

export interface TaskData {
	id: string;
	name: string;
	description: string;
	checked: boolean;
}

export function ListTask({
	ListHeaderComponent,
	handleGoToDetailsScreen,
	handleDeleteTask,
	tasks
}: {
	ListHeaderComponent: ReactElement;
	handleGoToDetailsScreen: (data: TaskData) => void;
	handleDeleteTask: (id: string) => void;
	tasks: TaskData[];
}) {
	return (
		<>
			<FlatList
				ListHeaderComponent={ListHeaderComponent}
				style={{ paddingBottom: 100 }}
				data={tasks}
				renderItem={({ item }) => (
					<Card
						key={item.id}
						title={item.name}
						checked={item.checked}
						onPress={() => handleGoToDetailsScreen(item)}
						handleDeleteTask={() => handleDeleteTask(item.id)}
					/>
				)}
				contentContainerStyle={{ gap: 20 }}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item, index) => item.id}
				ListEmptyComponent={<Text>Nenhuma tarefa encontrada!</Text>}
			/>
		</>
	);
}
