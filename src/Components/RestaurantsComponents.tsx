import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface RestaurantCardProps {
    title: string;
    imageUrl: string;
}

const RestaurantsComponents: React.FC<RestaurantCardProps> = ({ title, imageUrl }) => {
    return (
    <View style={styles.cardContainer}>
        <View  style={styles.innerContainer}>
            <Image source={{ uri: imageUrl }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{title}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 15,
        marginLeft: 20,
        marginRight: 20,
        height: 150,
        elevation: 4,
        shadowColor: 'blach',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        //overflow: Platform.OS === 'android' ? 'hidden': 'visible',
    },
    innerContainer: {
        padding: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        width: 300,
        height: 100,
        borderRadius: 8,
    },
    cardTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 5,
    },
});

export default RestaurantsComponents;
