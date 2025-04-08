import React from 'react';
import NoDoubleTapZoomView from '@components/NoDoubleTapZoomView';

const withNoDoubleTapZoom = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
    return (props: P) => (
        <NoDoubleTapZoomView>
            <Component {...props} />
        </NoDoubleTapZoomView>
    );
};

export default withNoDoubleTapZoom;
