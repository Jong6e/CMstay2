import React from 'react';
import { View } from 'react-native';
import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';

const NoDoubleTapZoomView: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const doubleTapBlocker = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            // 더블탭 확대 방지: 아무 것도 하지 않음
        });

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GestureDetector gesture={doubleTapBlocker}>
                <View style={{ flex: 1 }}>{children}</View>
            </GestureDetector>
        </GestureHandlerRootView>
    );
};

export default NoDoubleTapZoomView;