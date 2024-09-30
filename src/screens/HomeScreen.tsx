import { StyleSheet, View } from 'react-native';
import { ButtonPlus, Header, Input, ListTask, Logo } from '../components';

export function HomeScreen() {
	return (
		<View style={styles.container}>
			<ButtonPlus />
			<ListTask
				ListHeaderComponent={
					<>
						<Logo />
						<Input placeholder="Digite sua busca" />
						<Header title="Lista de tarefas" />
					</>
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20
	}
});
