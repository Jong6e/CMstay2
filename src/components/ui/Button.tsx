import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    GestureResponderEvent,
    ViewStyle,
} from 'react-native';
import { colors } from '@styles/colors';
import { fonts } from '@styles/fonts';
import { spacing } from '@styles/spacing';
import { shadows } from '@styles/shadows';

interface ButtonProps {
    label: string;
    onPress?: (event: GestureResponderEvent) => void;
    variant?: 'primary' | 'outline';
    size?: 'large' | 'small';
    fullWidth?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
}

export const Button = ({
    label,
    onPress,
    variant = 'primary',
    size = 'large',
    fullWidth = false,
    disabled = false,
    style,
}: ButtonProps) => {
    const buttonStyle = [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'outline' && styles.outline,
        size === 'large' ? styles.large : styles.small,
        fullWidth && { width: '100%' },
        disabled && styles.disabled,
        style,
    ] as ViewStyle[];

    const textStyle = [
        styles.text,
        variant === 'outline' && { color: colors.primary },
        disabled && { color: colors.gray300 },
    ];

    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle}
            activeOpacity={variant === 'primary' ? 0.7 : 0.8}
            disabled={disabled}
        >
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
    },
    primary: {
        backgroundColor: colors.primary,
        ...shadows.default,
    },
    outline: {
        borderWidth: 1.5,
        borderColor: colors.primary,
        backgroundColor: 'transparent',
    },
    disabled: {
        backgroundColor: colors.gray300,
    },
    large: {
        height: 56,
    },
    small: {
        height: 40,
        paddingHorizontal: spacing.md,
    },
    text: {
        fontSize: fonts.body,
        fontWeight: fonts.weight.bold,
        color: colors.background,
    },
});
