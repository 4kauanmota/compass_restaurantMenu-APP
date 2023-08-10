import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface RestaurantCardProps {
    title: string;
    imageUrl: string;
}

const RestaurantsComponents: React.FC<RestaurantCardProps> = ({ title, imageUrl }) => {
    return (
    <View style={styles.cardContainer}>
            <Image source={{ uri: imageUrl }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 15,
        marginLeft: 25,
        marginRight: 25,
        height: 150,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        //overflow: Platform.OS === 'android' ? 'hidden': 'visible',
    },
    cardImage: {
        width: 370,
        height: 150,
        borderRadius: 8,
        opacity: 0.75,
    },
    cardTitle: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        position: 'absolute',
        bottom: 24,
        left: 39,
        right: 160,
        textAlign: "left",
    },
});

export default RestaurantsComponents;
