import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({title, back, data}) => {
    const navigation = useNavigation();

    return (
        <View
            style={[
                styles.Container,
                {
                    position: back ? 'absolute' : 'relative',
                    top: 0,
                    backgroundColor: back ? 'transparent' : '#F5FCFF',
                    elevation: back ? 0 : 2,
                },
            ]}>
            {back && (
                <TouchableOpacity style={[styles.Btn, {left: 10}]}>
                    <Ionicons
                        name="arrow-back"
                        size={28}
                        color="#000"
                        style={styles.BtnIcon}
                        onPress={() => navigation.goBack()}
                    />
                </TouchableOpacity>
            )}
            <Text style={[styles.Heading, {color: back ? '#fff' : '#000'}]}>
                {title}
            </Text>
            {back && (
                <TouchableOpacity style={[styles.Btn, {right: 10}]}>
                    <Ionicons
                        name="share-social"
                        size={28}
                        color="#000"
                        style={styles.BtnIcon}
                        onPress={() => {
                            console.log(data);
                        }}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    Container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

        zIndex: 999,
        width: '100%',
    },
    Heading: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },

    Btn: {
        position: 'absolute',
        top: 10,
        height: 40,
        width: 40,
        borderRadius: 100,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        elevation: 5,
    },
    BtnIcon: {
        // position: 'absolute',
    },
});
