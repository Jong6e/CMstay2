// src/styles/styles.ts
import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#F1B321',
    secondary: '#fff8ec',
    text: '#333',
    grayText: '#595959',
    danger: '#ff5f6d',
    white: '#fff',
    border: '#ddd',
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
    },
    subtitle: {
        fontSize: 13,
        color: colors.grayText,
        marginTop: 4,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.secondary,
        borderRadius: 20,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    dangerButton: {
        backgroundColor: colors.danger,
    },
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    footer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.border,
        backgroundColor: colors.primary,
    },
});
