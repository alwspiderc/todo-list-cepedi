import { StyleSheet, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import * as yup from 'yup';
import { Formik } from 'formik';

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
	const schema = yup.object().shape({
		name: yup.string().required('Nome da tarefa é obrigatório'),
		description: yup.string()
	});

	function handleCreateTask(name: string, description: string) {
		console.log(name, description);
	}

	function handleEditTask(name: string, description: string) {
		console.log(name, description);
	}

	function HeaderComponent() {
		return (
			<Text style={styles.title}>{isEdit ? 'Editar' : 'Criar'} Tarefa</Text>
		);
	}

	function Children() {
		return (
			<Formik
				initialValues={{
					name: isEdit ? task?.name || '' : '',
					description: isEdit ? task?.description || '' : ''
				}}
				validateOnMount={true}
				onSubmit={(values) => {
					isEdit
						? handleEditTask(values.name, values.description)
						: handleCreateTask(values.name, values.description);
					refModalize.current?.close();
				}}
				validationSchema={schema}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					isValid,
					touched
				}) => (
					<View style={styles.container}>
						<View style={{ gap: 20 }}>
							<Input
								label="Nome"
								placeholder="Digite o nome da tarefa"
								onChangeText={handleChange('name')}
								onBlur={handleBlur('name')}
								value={values.name}
							/>
							{errors.name && touched.name && (
								<Text style={styles.textErrors}>{errors.name}</Text>
							)}
							<Input
								label="Descrição"
								placeholder="Digite a descrição da tarefa"
								underlineColorAndroid="transparent"
								numberOfLines={40}
								multiline={true}
								style={{ height: 200 }}
								onChangeText={handleChange('description')}
								onBlur={handleBlur('description')}
								value={values.description}
							/>
						</View>
						<Button
							title={isEdit ? 'Salvar' : 'Criar'}
							style={{
								backgroundColor: isValid ? '#f8f8f8' : '#b9b9b9',
								borderColor: isValid ? '#86a6df' : '#a9a9a9'
							}}
							onPress={handleSubmit}
						/>
					</View>
				)}
			</Formik>
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
	},
	textErrors: {
		color: 'red',
		fontSize: 12
	}
});
