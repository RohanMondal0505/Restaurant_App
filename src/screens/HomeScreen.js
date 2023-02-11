import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Menus} from '../api/StaticData';
import Header from '../components/Header';
import MenuCart from '../components/MenuCart';

const HomeScreen = () => {
    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: '#eee', paddingBottom: 15}}>
            <Header title={'All Menus'} back={false} />
            <FlatList
                data={Menus}
                renderItem={({item, index}) => {
                    return (
                        <View
                            key={index}
                            style={{
                                paddingHorizontal: 5,
                                paddingTop: 15,
                            }}>
                            <MenuCart data={item} />
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
