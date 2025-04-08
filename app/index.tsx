import React from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import Header from '../src/components/header';
import Footer from '../src/components/footer';
import { globalStyles, colors } from '../src/styles/styles';

const MainPage = () => {
    const menuItems = [
        { title: '치매 자가 진단', desc: '치매위험도 자가진단 진행', page: 'selfCheck' },
        { title: '돌봄 다이어리', desc: '처방약 복용, 병원 예약 등 일정 관리', page: 'scheduler' },
        { title: '지역별 실종자 탐색', desc: '우리 주변 실종 어르신 찾기', page: 'missingList' },
        { title: '배회감지 서비스', desc: '등록된 대상자의 위치 추적', page: 'locationTracking' },
        { title: '외출 기록 확인하기', desc: '실시간 외출 기록 확인', page: 'gooutRecord' },
    ];

    const handleCall = () => {
        Linking.openURL('tel:112');
    };

    return (
        <View style={{ flex: 1 }}>
            <Header currentPage="치매STAY" />
            <ScrollView contentContainerStyle={[globalStyles.container, { paddingBottom: 80 }]}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={globalStyles.button}
                        onPress={() => router.push(`/${item.page}`)}
                    >
                        <View style={{ flexShrink: 1 }}>
                            <Text style={globalStyles.title}>{item.title}</Text>
                            <Text style={globalStyles.subtitle}>{item.desc}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#555" />
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    style={[globalStyles.button, globalStyles.dangerButton]}
                    onPress={handleCall}
                >
                    <View style={{ flexShrink: 1 }}>
                        <Text style={globalStyles.title}>실종신고</Text>
                    </View>
                    <Ionicons name="call-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </ScrollView>
            <Footer />
        </View>
    );
};

export default MainPage;
