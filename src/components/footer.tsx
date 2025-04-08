import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { globalStyles, colors } from '@styles/styles';

const Footer: React.FC = () => {
    return (
        <View style={globalStyles.footer}>
            {/* 좌측 아이콘 (미구현) */}
            <TouchableOpacity onPress={() => console.log('좌측 버튼')}>
                <Ionicons name="settings-outline" size={24} color={colors.text} />
            </TouchableOpacity>

            {/* 홈 버튼 → 메인페이지로 이동 */}
            <Link href="/" asChild>
                <TouchableOpacity>
                    <Ionicons name="home" size={28} color={colors.text} />
                </TouchableOpacity>
            </Link>

            {/* 마이페이지 버튼 → 뒤로가기에 반응하게 하기 위해 Link 사용 */}
            <Link href="/myPage" asChild>
                <TouchableOpacity>
                    <Ionicons name="person-outline" size={24} color={colors.text} />
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default Footer;
