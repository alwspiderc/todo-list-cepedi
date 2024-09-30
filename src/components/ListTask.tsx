import { ReactElement } from 'react';
import { FlatList } from 'react-native';
import data from '../mock/tasks.json';
import { Card } from './Card';

export function ListTask({
	ListHeaderComponent
}: {
	ListHeaderComponent: ReactElement;
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
						onPress={() => console.log('Pressed')}
					/>
				)}
				contentContainerStyle={{ gap: 20 }}
				showsVerticalScrollIndicator={false}
			/>
		</>
	);
}
