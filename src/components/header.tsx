import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { globalStyles, colors } from '@styles/styles';

interface HeaderProps {
    currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
    const router = useRouter();
    const isMainPage = currentPage === '치매STAY';

    return (
        <View style={globalStyles.header}>
            {/* 좌측: 뒤로가기 (메인페이지에서는 숨김) */}
            <View style={{ width: 40, alignItems: 'center' }}>
                {!isMainPage && (
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color={colors.text} />
                    </TouchableOpacity>
                )}
            </View>

            {/* 중앙: 페이지 타이틀 */}
            <Text style={globalStyles.title}>{currentPage}</Text>

            {/* 우측: 옵션 버튼 자리 (현재 기능 없음) */}
            <View style={{ width: 40, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => console.log('우측 아이콘 기능')}>
                    <Ionicons name="ellipsis-vertical" size={24} color={colors.text} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
