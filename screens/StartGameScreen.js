import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";

import Colors from "../constants/colors";

const StartGameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a new Game!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a number</Text>
				<Input
					style={styles.input}
					placeholder="Type your number"
					blurOnSubmit
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="number-pad"
					maxLength={2}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Reset"
							color={Colors.primary}
							onPress={() => {}}
						/>
					</View>
					<View>
						<Button
							title="Confirm"
							color={Colors.accent}
							onPress={() => {}}
						/>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 15,
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		paddingVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
	input: {
		width: 150,
		textAlign: "center",
		marginVertical: 10,
	},
});

export default StartGameScreen;
