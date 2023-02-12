import Clipboard from '@react-native-clipboard/clipboard';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({title, back, userId}) => {
    const navigation = useNavigation();

    const generateLink = async () => {
        try {
            const link = await dynamicLinks().buildShortLink({
                link: `https://restaurantappdeeplink.page.link/xkts?id=${userId}`,
                domainUriPrefix: 'https://restaurantappdeeplink.page.link',
                android: {
                    packageName: 'com.project_01',
                    minimumAppVersion: '21',
                },
            });
            return link;
        } catch (error) {
            console.log(error);
        }
    };

    const shareFunction = async () => {
        const link = await generateLink();
        if (link) {
            Clipboard.setString(link);
            Toast.show({
                type: 'success',
                text1: 'Link copied to clipboard',
            });
        }
    };

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
            <Toast />
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
                {back ? '' : title}
            </Text>
            {back && (
                <TouchableOpacity style={[styles.Btn, {right: 10}]}>
                    <Ionicons
                        name="share-social"
                        size={28}
                        color="#000"
                        style={styles.BtnIcon}
                        onPress={() => shareFunction()}
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
        zIndex: 9,
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
