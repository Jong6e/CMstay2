import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

const Scheduler = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header currentPage="돌봄 다이어리" />
            <View style={styles.container}>
                <Text style={styles.text}>여기에 돌봄 다이어리 기능이 들어갑니다.</Text>
            </View>
            <Footer />
        </View>
    );
};

export default Scheduler;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
    },
});
