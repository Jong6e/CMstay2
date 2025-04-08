// app/myPage.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '@components/header';
import Footer from '@components/footer';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '@styles/styles';

const MyPage = () => {
    return (
        <View style={styles.container}>
            <Header currentPage="마이페이지" />

            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/80' }}
                    style={styles.profileImage}
                />
                <Text style={styles.username}>아무개님</Text>
            </View>

            <View style={styles.listContainer}>
                <TouchableOpacity style={styles.listItem} onPress={() => console.log('회원정보')}>
                    <Text style={styles.listText}>회원정보</Text>
                    <Ionicons name="chevron-forward" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem} onPress={() => console.log('알림설정')}>
                    <Text style={styles.listText}>알림설정</Text>
                    <Ionicons name="chevron-forward" size={20} />
                </TouchableOpacity>
            </View>

            <View style={styles.flexGrow} />

            <View style={styles.logoutContainer}>
                <View style={styles.logoutButtonWrapper}>
                    <TouchableOpacity style={styles.logoutButton}>
                        <Text style={styles.logoutText}>로그아웃</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <Footer />
        </View>
    );
};

export default MyPage;

const styles = StyleSheet.create({
    container: { flex: 1 },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 24,
        backgroundColor: '#f9f9f9',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ddd',
    },
    username: {
        marginLeft: 16,
        fontSize: 16,
        fontWeight: 'bold',
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    listItem: {
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listText: {
        fontSize: 15,
    },
    flexGrow: {
        flex: 1,
    },

    logoutContainer: {
        backgroundColor: '#eee',
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        height: 100,
    },

    logoutButtonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

    logoutButton: {
        width: 100,
        height: 32,
        backgroundColor: '#fff',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },

    logoutText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    }
});
