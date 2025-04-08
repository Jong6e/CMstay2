// src/components/Footer.tsx
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { globalStyles, colors } from '@styles/styles';

const Footer: React.FC = () => {
    const router = useRouter();

    return (
        <View style={globalStyles.footer}>
            <TouchableOpacity onPress={() => console.log('좌측 기능')}>
                <Ionicons name="settings-outline" size={24} color={colors.text} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/')}>
                <Ionicons name="home" size={28} color={colors.text} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/myPage')}>
                <Ionicons name="person-outline" size={24} color={colors.text} />
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
