import { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { Card } from './Card';

const data = [
	{ name: 'Task 1' },
	{ name: 'Task 2' },
	{ name: 'Task 3' },
	{ name: 'Task 4' },
	{ name: 'Task 5' },
	{ name: 'Task 6' },
	{ name: 'Task 7' },
	{ name: 'Task 8' },
	{ name: 'Task 9' },
	{ name: 'Task 10' },
	{ name: 'Task 11' },
	{ name: 'Task 12' },
	{ name: 'Task 13' },
	{ name: 'Task 14' },
	{ name: 'Task 15' }
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
			renderItem={({ item }) => <Card title={item.name} />}
			contentContainerStyle={{ gap: 20 }}
			showsVerticalScrollIndicator={false}
		/>
	);
}
