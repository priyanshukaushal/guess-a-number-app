import react from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
    return (
        <View style={[styles.card, {...props.style}]}>
            <View style={styles.cardContents}>
            {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 10, height: 10},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginHorizontal: 4,
        marginVertical: 30,
        width: 300,
        height: 160
    },
    cardContents: {
        marginVertical: 20,
        width: "100%",
        alignItems: 'center'
    }
});

export default Card;