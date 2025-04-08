import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

const LocationTracking = () => {
    return (
        <View style={styles.container}>
            <Header currentPage="배회감지 서비스" />
            <View style={styles.content}>
                <Text>배회감지 페이지입니다.</Text>
            </View>
            <Footer />
        </View>
    );
};

export default LocationTracking;

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
