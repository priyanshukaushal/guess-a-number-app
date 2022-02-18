import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const loadFonts = async () => 
  await Font.loadAsync({
    "open-sans" : require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold" : require('./assets/fonts/OpenSans-Bold.ttf')
  });

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [noOfRounds, setNoOfRounds] = useState(-1);
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return (
      <AppLoading 
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
      );
  }

  const restartGameHandler = () => {
    setUserNumber();
    setNoOfRounds(-1);
  }

  const endGameOverHandler = (numRounds) => {
    setNoOfRounds(numRounds);
  }

  const startGameHandler = enteredNumber => {
    setUserNumber(enteredNumber);
  }

  let componentToBeRendered = <StartGameScreen  onStartGame={startGameHandler}/>

  if(userNumber && noOfRounds < 0){
    componentToBeRendered = <GameScreen userNumber={userNumber} onGameOver={endGameOverHandler}/>
  }
  else if(userNumber && noOfRounds >= 0){
    componentToBeRendered = <GameOverScreen onGameRestart={restartGameHandler} noOfRounds={noOfRounds} userNumber={userNumber}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {componentToBeRendered}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
