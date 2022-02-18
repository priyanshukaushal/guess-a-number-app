import react from "react";
import { useState } from "react";
import { View, Text,StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Card from "../components/Card";
import Colors from "./constants/Colors";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {

    const [userNumber, setUserNumber] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const inputChangeHandler = (enteredText) => {
        setUserNumber(enteredText.replace( /[^0-9]/g , ''));
    };

    const resetHandler = () => {
        setUserNumber('');
        setIsConfirmed(false);
        setSelectedNumber();
        Keyboard.dismiss();
    }

    const confirmHandler = () => {
        const finalNumber = parseInt(userNumber);
        if(isNaN(finalNumber) || finalNumber <= 0 || finalNumber > 99){
            Alert.alert("Invalid Input!", 
                         "Enter a Number between 1 and 99",
                         [{text: 'Okay', style: 'default', onPress: resetHandler}]);
            return;
        }
        else{
            setIsConfirmed(true);
            setUserNumber('');
            setSelectedNumber(finalNumber);
            Keyboard.dismiss();
        }
    }

    let confirmedOutput;

    if(isConfirmed){
        confirmedOutput = (
        <Card>
            <Text style={{ fontSize: 14, justifyContent: 'center', color: '#333', fontFamily: 'open-sans' }} >You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button style={{ fontFamily: 'open-sans' }} title="START GAME" onPress={() => props.onStartGame(selectedNumber)} color={Colors.primary}/>
        </Card>
        );
        
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
        <View style={styles.screen}>
            <Text style={styles.textStyle}>Start a New Game!</Text>
            <Card>
                <View>
                    <Text style={{ fontSize: 14, justifyContent: 'center', color: '#333', fontFamily: 'open-sans' }}>Enter A Number</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={inputChangeHandler} style={styles.input} keyboardType="number-pad" maxLength={2} value={userNumber} />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={{ width: 100, fontFamily: 'open-sans' }}><Button color={Colors.primary} onPress={confirmHandler} title="CONFIRM"/></View>
                    <View style={{ width: 100, fontFamily: 'open-sans' }}><Button color={Colors.secondary} onPress={resetHandler} title="RESET"/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        flex: 1,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'open-sans',
        marginVertical: 15,
        color: '#333'
    },
    buttonContainer: {
        marginTop: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 10,

    },
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        textAlign: "center",
        width: 45,
        fontSize: 25
    }
});
export default StartGameScreen;