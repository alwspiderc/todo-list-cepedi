import { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import {
	Button,
	ButtonPlus,
	CheckBox,
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

			<Modalize
				ref={filterRef}
				modalHeight={500}
				HeaderComponent={
					<Text
						style={{
							fontSize: 20,
							marginTop: 30,
							fontWeight: 'bold',
							textAlign: 'center'
						}}
					>
						Filtro
					</Text>
				}
				childrenStyle={{ marginTop: 50 }}
			>
				<View style={{ marginLeft: 40, gap: 30 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<CheckBox checked />
						<Text style={{ marginLeft: 8, fontSize: 16 }}>Concluídas</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<CheckBox checked={false} />
						<Text style={{ marginLeft: 8, fontSize: 16 }}>A concluir</Text>
					</View>
				</View>
				<View style={{ paddingHorizontal: 40, marginTop: 70 }}>
					<Button title="PESQUISAR" />
				</View>
			</Modalize>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20
	}
});
