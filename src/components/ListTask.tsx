import { ReactElement } from 'react';
import { FlatList } from 'react-native';
import data from '../mock/tasks.json';
import { Card } from './Card';

export interface TaskData {
	name: string;
	description: string;
	checked: boolean;
}

export function ListTask({
	ListHeaderComponent,
	handleGoToDetailsScreen
}: {
	ListHeaderComponent: ReactElement;
	handleGoToDetailsScreen: (data: TaskData) => void;
}) {
	return (
		<>
			<FlatList
				ListHeaderComponent={ListHeaderComponent}
				style={{ paddingBottom: 100 }}
				data={data}
				renderItem={({ item }) => (
					<Card
						title={item.name}
						checked={item.checked}
						onPress={() => handleGoToDetailsScreen(item)}
					/>
				)}
				contentContainerStyle={{ gap: 20 }}
				showsVerticalScrollIndicator={false}
			/>
		</>
	);
}
