import { StyleSheet, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { CheckBox } from './CheckBox';
import { Button } from './Button';
import { useTasks } from '../context';
import { useState } from 'react';

export function FilterModalize({ filterRef }: { filterRef: any }) {
	const [status, setStatus] = useState('all');
	const { handleFilterTasks } = useTasks();

	function HeaderComponent() {
		return <Text style={styles.title}>Filtro</Text>;
	}

	function Children() {
		return (
			<View style={styles.container}>
				<View style={styles.containerCheck}>
					<View style={styles.contentCheck}>
						<CheckBox
							checked={status === 'all'}
							onPress={() => setStatus('all')}
						/>
						<Text style={styles.textCheck}>Todas</Text>
					</View>
					<View style={styles.contentCheck}>
						<CheckBox
							checked={status === 'completed'}
							onPress={() => setStatus('completed')}
						/>
						<Text style={styles.textCheck}>Concluídas</Text>
					</View>
					<View style={styles.contentCheck}>
						<CheckBox
							checked={status === 'uncompleted'}
							onPress={() => setStatus('uncompleted')}
						/>
						<Text style={styles.textCheck}>A concluir</Text>
					</View>
				</View>
				<Button
					title="PESQUISAR"
					onPress={() => {
						if (status === '') {
							return;
						}
						handleFilterTasks(status);
						filterRef.current.close();
					}}
					isValid={true}
				/>
			</View>
		);
	}
	return (
		<Modalize
			ref={filterRef}
			adjustToContentHeight
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
		marginTop: 60,
		marginHorizontal: 40
	},
	containerCheck: {
		gap: 30,
		marginBottom: '30%'
	},
	contentCheck: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	textCheck: {
		marginLeft: 8,
		fontSize: 16
	},
	title: {
		fontSize: 20,
		marginTop: 30,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});
