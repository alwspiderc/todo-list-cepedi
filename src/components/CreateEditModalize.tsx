import { StyleSheet, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Button } from './Button';
import { Input } from './Input';
import { TaskData } from './ListTask';

export function CreateEditModalize({
	refModalize,
	isEdit,
	task
}: {
	refModalize: any;
	isEdit: boolean;
	task?: TaskData;
}) {
	function HeaderComponent() {
		return (
			<Text style={styles.title}>{isEdit ? 'Editar' : 'Criar'} Tarefa</Text>
		);
	}

	function Children() {
		return (
			<View style={styles.container}>
				<View style={{ gap: 20 }}>
					<Input
						label="Nome"
						placeholder="Digite o nome da tarefa"
						defaultValue={task?.name || ''}
					/>

					<Input
						label="Descrição"
						placeholder="Digite a descrição da tarefa"
						underlineColorAndroid="transparent"
						numberOfLines={40}
						multiline={true}
						style={{ height: 200 }}
						defaultValue={task?.description || ''}
					/>
				</View>
				<Button title={isEdit ? 'Salvar' : 'Criar'} onPress={() => {}} />
			</View>
		);
	}

	return (
		<Modalize
			ref={refModalize}
			adjustToContentHeight
			childrenStyle={{ height: 700 }}
			HeaderComponent={<HeaderComponent />}
		>
			<Children />
		</Modalize>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		marginTop: 30,
		marginHorizontal: 40,
		gap: 150
	},
	title: {
		fontSize: 20,
		marginTop: 30,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});
