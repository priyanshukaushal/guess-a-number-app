import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Button, Text, ScrollView } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Colors from "./constants/Colors";
import { Ionicons } from '@expo/vector-icons';


const renderListItem = (val, round) => (
    <View key={val} style={styles.listItem}>
        <Text style={styles.listText}>#{round}</Text>
        <Text style={styles.listText}>{val}</Text>
    </View>
);

const generateRandomNumber = (start, end) => {
    let min = Math.ceil(start);
    let max = Math.floor(end);
    if(min >= max) return max;
    return Math.floor(Math.random()*(max-min)) + min;
}

const GameScreen = (props) => {
    const initialGuess = generateRandomNumber(1, 100);
    const [guessedNumber, setGuessedNumber] = useState(initialGuess);
    const [rounds, setRounds] = useState(0);
    const [guessList, setGuestList] = useState([initialGuess,]);
    const low = useRef(1);
    const high = useRef(100);

    const {userNumber, onGameOver} = props;

    useEffect(() => {
        if(guessedNumber == userNumber){
            onGameOver(rounds);
        }
    }, [guessedNumber, userNumber, onGameOver]);

    const NextGuessHandler = (direction) => {
        if(direction == "lower"){
            high.current = guessedNumber;
        }
        else{
            low.current = guessedNumber+1;
        }
        setRounds((prevRounds) => prevRounds+1);
        const newGuess = generateRandomNumber(low.current, high.current);
        setGuessedNumber(newGuess);
        setGuestList((prev) => [newGuess, ...prev]);
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 22, fontFamily: 'open-sans' }}>Opponent's Guess</Text>
            <Card style>
                <NumberContainer style={{ marginBottom: 10 }}>{guessedNumber}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button color={Colors.primary} onPress={NextGuessHandler.bind(this, "lower")} title="LOWER"/>
                    <Button color={Colors.primary} onPress={NextGuessHandler.bind(this, "higher")} title="HIGHER"/>
                 </View>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {guessList.map((guess, index) => renderListItem(guess, guessList.length-index)) } 
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    listText: {
        fontFamily: 'open-sans',
        fontSize: 15
    },
    listContainer: {
        width: '100%',
        height: 300
    },
    list: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        paddingVertical: 40,
        alignItems: 'center', 
        fontFamily: 'open-sans-bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
    }
});

export default GameScreen;
