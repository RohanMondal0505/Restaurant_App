import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const DetailScreen = ({route}) => {
    const {data} = route.params;

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
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView style={styles.Container}>
                <Header title={'Menu Details'} back={true} data={data} />
                <View style={styles.ImageContainer}>
                    <Image style={styles.Image} source={{uri: data.images}} />
                </View>
                <View style={styles.DetailContainer}>
                    <View style={[styles.HeaderContainer, styles.Row]}>
                        <Text style={styles.Header}>{data.name}</Text>
                        <Text style={styles.Price}>$ {data.price}</Text>
                    </View>
                    <Text style={styles.Row}>{rating(data.rating)}</Text>
                    <Text style={[styles.Description, styles.Row]}>
                        {data.description}
                    </Text>
                    <Text style={[styles.Cuisine_name, styles.Row]}>
                        Country Of Origin {data.cuisine_name}
                    </Text>
                    <Text style={[styles.Category_name, styles.Row]}>
                        Type: {data.category_name}
                    </Text>
                    <Text style={[styles.Ingredients, styles.Row]}>
                        Ingredients:
                    </Text>
                    <Text style={[styles.IngredientsText, styles.Row]}>
                        {data.ingredients}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Container: {},
    ImageContainer: {
        height: 300,
        overflow: 'hidden',
    },
    Image: {
        width: '100%',
        height: '100%',
    },
    DetailContainer: {
        width: '100%',
        height: '100%',
        padding: 10,
        marginBottom: 10,
        marginTop: '-15%',
        backgroundColor: '#fff',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        elevation: 2,
    },
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Row: {
        marginTop: 15,
    },
    Header: {
        flex: 3,
        fontSize: 22,
        fontWeight: '700',
        color: '#000',
    },
    Price: {
        flex: 1,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        color: 'red',
    },
    Description: {
        fontSize: 15,
        fontWeight: '300',
    },
    Cuisine_name: {
        fontSize: 15,
        fontWeight: '500',
    },
    Category_name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    Ingredients: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
    },
    IngredientsText: {
        fontSize: 15,
        fontWeight: '300',
    },
});
