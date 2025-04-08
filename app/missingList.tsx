import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

const MissingList = () => {
    return (
        <View style={styles.container}>
            <Header currentPage="지역별 실종자 탐색" />
            <View style={styles.content}>
                <Text>실종자 탐색 페이지입니다.</Text>
            </View>
            <Footer />
        </View>
    );
};

export default MissingList;

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
