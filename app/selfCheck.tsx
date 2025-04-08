import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

const SelfCheck = () => {
    return (
        <View style={styles.container}>
            <Header currentPage="치매 자가 진단" />
            <View style={styles.content}>
                <Text>자가진단 페이지입니다.</Text>
            </View>
            <Footer />
        </View>
    );
};

export default SelfCheck;

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
