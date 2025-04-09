// src/components/ui/Container.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@styles/colors';
import { spacing } from '@styles/spacing';

interface ContainerProps {
    children: React.ReactNode;
    style?: ViewStyle;
    noPadding?: boolean;
    bgColor?: string;
}

export const Container = ({ children, style, noPadding = false, bgColor }: ContainerProps) => {
    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor || colors.background }]}>
            <View
                style={[
                    styles.container,
                    noPadding && { paddingHorizontal: 0 },
                    style,
                ]}
            >
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
    },
});