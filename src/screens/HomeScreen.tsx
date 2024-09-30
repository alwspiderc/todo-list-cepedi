import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import {
	ButtonPlus,
	CreateModalize,
	FilterModalize,
	Header,
	InputSearch,
	ListTask,
	Logo
} from '../components';

export function HomeScreen() {
	const filterRef = useRef<Modalize>(null);
	const createRef = useRef<Modalize>(null);

	function handleOpenModalizeFilter() {
		filterRef.current?.open();
	}
	function handleOpenModalizeCreate() {
		createRef.current?.open();
	}
	return (
		<View style={styles.container}>
			<ButtonPlus onPress={handleOpenModalizeCreate} />
			<ListTask
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
			<CreateModalize createRef={createRef} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20
	}
});
