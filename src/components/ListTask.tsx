import { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { Card } from './Card';

const data = [
	{ name: 'Task 1', checked: false },
	{ name: 'Task 2', checked: true },
	{ name: 'Task 3', checked: true },
	{ name: 'Task 4', checked: true },
	{ name: 'Task 5', checked: true },
	{ name: 'Task 6', checked: true },
	{ name: 'Task 7', checked: true },
	{ name: 'Task 8', checked: true },
	{ name: 'Task 9', checked: true },
	{ name: 'Task 10', checked: true },
	{ name: 'Task 11', checked: true },
	{ name: 'Task 12', checked: true },
	{ name: 'Task 13', checked: true },
	{ name: 'Task 14', checked: true },
	{ name: 'Task 15', checked: true }
];
export function ListTask({
	ListHeaderComponent
}: {
	ListHeaderComponent: ReactElement;
}) {
	return (
		<FlatList
			ListHeaderComponent={ListHeaderComponent}
			style={{ paddingBottom: 100 }}
			data={data}
			renderItem={({ item }) => (
				<Card title={item.name} checked={item.checked} />
			)}
			contentContainerStyle={{ gap: 20 }}
			showsVerticalScrollIndicator={false}
		/>
	);
}
