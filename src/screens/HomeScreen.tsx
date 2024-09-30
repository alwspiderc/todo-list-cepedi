import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import {
	ButtonPlus,
	FilterModalize,
	Header,
	Input,
	ListTask,
	Logo
} from '../components';

export function HomeScreen() {
	const filterRef = useRef<Modalize>(null);

	function handleOpenModalize() {
		filterRef.current?.open();
	}

	return (
		<View style={styles.container}>
			<ButtonPlus />
			<ListTask
				ListHeaderComponent={
					<>
						<Logo />
						<Input placeholder="Digite sua busca" />
						<Header title="Lista de tarefas" onPress={handleOpenModalize} />
					</>
				}
			/>

			<FilterModalize filterRef={filterRef} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20
	}
});
