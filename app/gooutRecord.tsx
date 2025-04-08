import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

const GooutRecord = () => {
    return (
        <View style={styles.container}>
            <Header currentPage="외출 기록 확인하기" />
            <View style={styles.content}>
                <Text>외출 기록 확인 페이지입니다.</Text>
            </View>
            <Footer />
        </View>
    );
};

export default GooutRecord;

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
