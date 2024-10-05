import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import * as yup from 'yup';
import { Formik } from 'formik';

import { Button } from './Button';
import { Input } from './Input';
import { TaskData } from './ListTask';
import { useTasks } from '../context';

export function CreateEditModalize({
	refModalize,
	isEdit,
	task
}: {
	refModalize: any;
	isEdit: boolean;
	task?: TaskData;
}) {
	const { handleEditTask, handleCreateTask } = useTasks();

	const schema = yup.object().shape({
		name: yup.string().required('Nome da tarefa é obrigatório'),
		description: yup.string()
	});

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
				onSubmit={(values, { resetForm }) => {
					if (isEdit) {
						handleEditTask?.({
							id: task!.id,
							checked: task!.checked,
							name: values.name,
							description: values.description
						});
					} else {
						handleCreateTask?.(values.name, values.description);
					}
					resetForm();
					refModalize.current?.close();
				}}
				validationSchema={schema}
			>
				{({ handleChange, handleSubmit, values, errors, isValid, touched }) => (
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
						style={styles.container}
					>
						<View style={{ gap: 20 }}>
							<Input
								label="Nome"
								placeholder="Digite o nome da tarefa"
								onChangeText={handleChange('name')}
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
								onChangeText={handleChange('description')}
								value={values.description}
							/>
						</View>
						<Button
							title={isEdit ? 'Salvar' : 'Criar'}
							isValid={isEdit ? true : isValid}
							onPress={handleSubmit}
						/>
					</KeyboardAvoidingView>
				)}
			</Formik>
		);
	}

	return (
		<Modalize
			ref={refModalize}
			key={isEdit ? 'edit' : 'create'}
			adjustToContentHeight
			scrollViewProps={{ showsVerticalScrollIndicator: false }}
			childrenStyle={{ height: 500 }}
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
		marginHorizontal: 40,
		gap: 30
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
