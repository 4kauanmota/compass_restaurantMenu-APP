import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform  } from "react-native";

interface RestaurantCardProps {
    title: string;
    imageUrl: string;
}


const RestaurantsComponents: React.FC<RestaurantCardProps> = ({ title, imageUrl }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.cardContainer}
        >
            <View style={styles.card}>
                <Image source={{ uri: imageUrl }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 5,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOpacity: 0.25,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 8,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
    },
    cardPressed: {
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: 12,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    cardImage: {
        width: "100%",
        height: "100%",
        borderRadius: 14,
        opacity: 0.75,
    },
    cardTitle: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        position: 'absolute',
        bottom: 24,
        left: 14,
        right: 110,
        textAlign: "left",
    },
});

export default RestaurantsComponents;
