import { StyleSheet, Text, View } from 'react-native';
import { ButtonBack } from '../components/ButtonBack';
import { Button } from '../components';

interface Props {}

export function DetailsScreen({}: Props) {
	return (
		<View style={styles.container}>
			<View>
				<ButtonBack />
				<Text style={styles.title}>Lavar Roupas</Text>
				<Text style={styles.description}>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English. Many desktop publishing packages and web
					page editors now use Lorem Ipsum as their default model text, and a
					search for 'lorem ipsum' will uncover many web sites still in their
					infancy. Various versions have evolved over the years, sometimes by
					accident, sometimes on purpose (injected humour and the like).
				</Text>
			</View>
			<Button title="Editar" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: 'space-between',
		marginBottom: 50
	},
	title: {
		color: '#494949',
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 45,
		textAlign: 'center'
	},
	description: {
		color: '#494949',
		fontSize: 20,
		marginTop: 20,
		textAlign: 'left',
		lineHeight: 24
	}
});
