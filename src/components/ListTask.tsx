import { ReactElement } from 'react';
import { FlatList, Text } from 'react-native';
import { Card } from './Card';
import { useTasks } from '../context';

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
	tasks: TaskData[] | undefined;
}) {
	return (
		<>
			<FlatList
				ListHeaderComponent={ListHeaderComponent}
				style={{ paddingBottom: 100 }}
				data={tasks?.reverse()}
				renderItem={({ item }) => (
					<Card
						key={item.id}
						title={item.name}
						id={item.id}
						checked={item.checked}
						onPress={() => handleGoToDetailsScreen(item)}
						handleDeleteTask={() => handleDeleteTask(item.id)}
					/>
				)}
				contentContainerStyle={{ gap: 20 }}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={<Text>Nenhuma tarefa encontrada!</Text>}
			/>
		</>
	);
}
