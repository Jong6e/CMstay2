// src/components/Header.tsx
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
    const isMainPage = currentPage === '메인페이지';

    return (
        <View style={globalStyles.header}>
            <View style={{ width: 40, alignItems: 'center' }}>
                {!isMainPage && (
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color={colors.text} />
                    </TouchableOpacity>
                )}
            </View>

            <Text style={globalStyles.title}>{currentPage}</Text>

            <View style={{ width: 40, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => console.log('우측 아이콘 기능')}>
                    <Ionicons name="ellipsis-vertical" size={24} color={colors.text} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
