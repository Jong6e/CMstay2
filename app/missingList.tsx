import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import Header from '@components/header';
import Footer from '@components/footer';

const regions = [
    '전체', '서울', '부산', '대구', '울산', '광주', '대전', '세종', '경기',
    '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'
];

const dummyData = [
    {
        id: 1,
        name: '홍길동',
        gender: '남',
        age: 75,
        missingDate: '2024-12-01',
        location: '서울 중구 을지로5가',
        image: 'https://via.placeholder.com/100',
        region: '서울'
    },
    {
        id: 2,
        name: '김영희',
        gender: '여',
        age: 80,
        missingDate: '2024-11-15',
        location: '부산 해운대구 좌동로 103',
        image: 'https://via.placeholder.com/100',
        region: '부산'
    },
    {
        id: 3,
        name: '이철수',
        gender: '남',
        age: 78,
        missingDate: '2024-10-20',
        location: '대구 수성구 범어동 222',
        image: 'https://via.placeholder.com/100',
        region: '대구'
    },
    {
        id: 4,
        name: '박미선',
        gender: '여',
        age: 82,
        missingDate: '2024-09-10',
        location: '울산 남구 삼산동 55번길 111-2',
        image: 'https://via.placeholder.com/100',
        region: '울산'
    },
    {
        id: 5,
        name: '정인국',
        gender: '남',
        age: 85,
        missingDate: '2024-08-05',
        location: '광주 북구 용봉동 장미아파트 4동',
        image: 'https://via.placeholder.com/100',
        region: '광주'
    },
    {
        id: 6,
        name: '최지현',
        gender: '여',
        age: 79,
        missingDate: '2024-07-30',
        location: '부산 동래구 사직로 22-1 사직동',
        image: 'https://via.placeholder.com/100',
        region: '부산'
    }
];

// 실종자 정보를 나타내는 타입 정의
type Person = {
    id: number;             // 고유 ID
    name: string;           // 이름
    gender: string;         // 성별
    age: number;            // 나이
    missingDate: string;    // 실종일자
    location: string;       // 실종 장소
    image: string;          // 사진 URL
    region: string;         // 지역
};


const MissingList = () => {
    const [selectedRegion, setSelectedRegion] = useState('전체');

    // 선택된 실종자 상태
    // 타입을 Person 또는 null 로 명시해줌 → 타입스크립트 오류 방지
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    const filteredData =
        selectedRegion === '전체'
            ? dummyData
            : dummyData.filter((item) => item.region === selectedRegion);

    return (
        <View style={styles.container}>
            <Header currentPage="실종자 탐색" />

            <View style={styles.content}>
                {/* 지역 선택 */}
                <ScrollView style={styles.regionSelector} contentContainerStyle={{ flexGrow: 1 }}>
                    {regions.map((region) => (
                        <TouchableOpacity
                            key={region}
                            onPress={() => setSelectedRegion(region)}
                            style={[
                                styles.regionButton,
                                selectedRegion === region && styles.regionButtonSelected
                            ]}
                        >
                            <Text
                                style={[
                                    styles.regionText,
                                    selectedRegion === region && styles.regionTextSelected
                                ]}
                            >
                                {region}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* 실종자 리스트 */}
                <ScrollView contentContainerStyle={styles.cardList}>
                    {filteredData.map((person) => (
                        <TouchableOpacity key={person.id} style={styles.card} onPress={() => setSelectedPerson(person)}>
                            <Image source={{ uri: person.image }} style={styles.image} />
                            <View style={styles.info}>
                                <Text style={styles.name}>{person.name}</Text>
                                <Text>{person.gender} / {person.age}세</Text>
                                <Text style={styles.ellipsisText} numberOfLines={1}>
                                    실종일자: {person.missingDate}
                                </Text>
                                <Text style={styles.ellipsisText} numberOfLines={1}>
                                    {person.location}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* 상세 모달 */}
            <Modal
                visible={!!selectedPerson}
                transparent
                animationType="none"
                onRequestClose={() => setSelectedPerson(null)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        {selectedPerson && (
                            <>
                                <Text style={styles.modalTitle}>{selectedPerson.name}</Text>
                                <Image source={{ uri: selectedPerson.image }} style={styles.modalImage} />
                                <Text>성별: {selectedPerson.gender}</Text>
                                <Text>나이: {selectedPerson.age}세</Text>
                                <Text>실종일자: {selectedPerson.missingDate}</Text>
                                <Text>장소: {selectedPerson.location}</Text>

                                <Pressable style={styles.closeButton} onPress={() => setSelectedPerson(null)}>
                                    <Text style={styles.closeButtonText}>닫기</Text>
                                </Pressable>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

            <Footer />
        </View>
    );
};

export default MissingList;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1, flexDirection: 'row' },

    // 지역 리스트
    regionSelector: {
        width: 60,
        minWidth: 60,
        maxWidth: 60,
        flexShrink: 0, // 화면 줄어도 이 영역 줄지 않음
        backgroundColor: '#f3f3f3',
    },

    regionButton: {
        paddingVertical: 10,
        paddingHorizontal: 6,
        marginVertical: 2,
        marginHorizontal: 4,
        borderRadius: 8,
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    regionButtonSelected: {
        backgroundColor: '#F8D990',
        borderColor: '#F9B233',
    },
    regionText: {
        fontSize: 12,
        textAlign: 'center',
    },
    regionTextSelected: {
        fontWeight: 'bold',
        color: '#000',
    },

    // 카드
    cardList: {
        padding: 10,
        flexGrow: 1,
    },
    card: {
        flexDirection: 'row',
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        elevation: 1,
    },
    image: {
        width: 100,
        height: 130,
        backgroundColor: '#ccc',
        borderRadius: 6,
    },
    info: {
        marginLeft: 16,
        justifyContent: 'center',
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    ellipsisText: {
        marginTop: 2
    },

    // 모달
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    modalImage: {
        width: 150,
        height: 180,
        borderRadius: 8,
        marginBottom: 12,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#F9B233',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
