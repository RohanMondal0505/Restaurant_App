import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const MenuCart = ({data}) => {
    const navigation = useNavigation();

    const rating = rating => {
        let ratings = [];

        for (let i = 0; i < Math.floor(rating); i++) {
            ratings.push(
                <Ionic
                    name="ios-star-sharp"
                    size={20}
                    color="#ffbf6a"
                    key={i}
                />,
            );
        }

        if (rating - Math.floor(rating) == 0.5) {
            ratings.push(
                <Ionic
                    name="ios-star-half-sharp"
                    size={20}
                    color="#ffbf6a"
                    key={0.5}
                />,
            );
        }

        if (ratings.length < 5) {
            for (let i = ratings.length; i < 5; i++) {
                ratings.push(
                    <Ionic
                        name="ios-star-outline"
                        size={20}
                        color="#ffbf6a"
                        key={i}
                    />,
                );
            }
        }

        return ratings;
    };

    return (
        <TouchableOpacity
            style={styles.Container}
            onPress={() => navigation.navigate('Detail', {userId: data.id})}>
            <View style={styles.ImageContainer}>
                <Image style={styles.Image} source={{uri: data.images}} />
            </View>

            <View style={styles.TextContainer}>
                <View style={styles.Left}>
                    <Text style={styles.LeftText}>{data.name}</Text>
                    <View style={styles.StarContainer}>
                        {rating(data.rating)}
                    </View>
                </View>

                <View style={styles.Right}>
                    <Text style={styles.PriceText}>$ {data.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MenuCart;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        width: 'auto',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    ImageContainer: {
        flex: 1,
        height: '100%',
    },
    Image: {
        width: '100%',
        height: '100%',
    },
    TextContainer: {
        flex: 3,
        height: '100%',
        flexDirection: 'row',
    },
    Left: {
        flex: 3,
    },
    LeftText: {
        padding: 10,
        paddingRight: 0,
        fontSize: 16,
        fontWeight: 'bold',
    },
    StarContainer: {
        height: 35,
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        paddingLeft: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    Right: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    PriceText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
