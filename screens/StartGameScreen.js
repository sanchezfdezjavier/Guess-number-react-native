import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

import Colors from "../constants/colors";

const StartGameScreen = (props) => {
	const [enteredValue, setEnteredValue] = useState();
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ""));
	};

	const resetInputHandler = () => {
		setEnteredValue("");
		setConfirmed(false);
	};

	const confirmInputHadler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number!",
				"Number has to be a number between 1 and 99.",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: resetInputHandler,
					},
				]
			);
			return;
		}
		setConfirmed(true);
		// Although we clear the input before, the values won't update till next render cycle
		// Is totally save to do it this way
		setEnteredValue("");
		setSelectedNumber(parseInt(enteredValue));
		Keyboard.dismiss();
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>You've selected:</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<Button title="START GAME" />
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
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
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title="Reset"
								color={Colors.primary}
								onPress={resetInputHandler}
							/>
						</View>
						<View>
							<Button
								title="Confirm"
								color={Colors.accent}
								onPress={confirmInputHadler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
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
	summaryContainer: {
		marginTop: 20,
		alignItems: "center",
	},
});

export default StartGameScreen;
