import { StyleSheet, Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { CheckBox } from './CheckBox';
import { Button } from './Button';

export function FilterModalize({ filterRef }: { filterRef: any }) {
	function HeaderComponent() {
		return <Text style={styles.title}>Filtro</Text>;
	}

	function Children() {
		return (
			<View style={styles.container}>
				<View style={styles.containerCheck}>
					<View style={styles.contentCheck}>
						<CheckBox checked />
						<Text style={styles.textCheck}>Concluídas</Text>
					</View>
					<View style={styles.contentCheck}>
						<CheckBox checked={false} />
						<Text style={styles.textCheck}>A concluir</Text>
					</View>
				</View>
				<Button title="PESQUISAR" onPress={() => console.log('')} />
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
