import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "./constants/Colors";

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={{ fontFamily: 'open-sans-bold', fontSize: 20 }}>The game is over!</Text>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/success.png")} style={styles.image} resizeMode="cover"/>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ fontFamily: 'open-sans', fontSize: 18 }}>Your phone took </Text>
                <Text style={{ color: Colors.primary, fontFamily: 'open-sans-bold', fontSize: 18 }}>{props.noOfRounds}</Text>
                <Text style={{ fontFamily: 'open-sans', fontSize: 18 }}> rounds</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'open-sans',  fontSize: 18 }}>To guess the number </Text>
                <Text style={{ color: Colors.primary, fontFamily: 'open-sans-bold',  fontSize: 18 }}>{props.userNumber}</Text>
                <Text style={{ fontFamily: 'open-sans',  fontSize: 18 }}>.</Text>
            </View>
            <View style={{ marginTop: 25 }}>
                <Button color={Colors.primary} style={{ fontFamily: 'open-sans'}} title="NEW GAME" onPress={props.onGameRestart}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 250,
        height: 250,
        borderRadius: 200,
        borderColor: 'black',
        borderWidth: 2,
        overflow: 'hidden',
        marginVertical: 20
    },
    image: {
        width: "100%",
        height: "100%",
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;