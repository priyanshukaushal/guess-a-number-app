import react from "react";
import { View, Text, StyleSheet } from "react-native";

const NumberContainer = (props) => {
    return (
        <View style={[styles.container, {...props.style}]}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        padding: 10,
        
    },
    text : {
        fontFamily: 'open-sans-bold',
        fontSize: 40,
        color: '#333'
    },
});

export default NumberContainer;