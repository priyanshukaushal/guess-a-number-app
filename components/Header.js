import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../screens/constants/Colors";

const Header = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.primary,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 35
    },
    textStyle: {
        color: "white",
        fontFamily: 'open-sans-bold',
        fontSize: 30
    }
});

export default Header;