declare module 'react-shuffle-text' {
    import * as React from 'react';

    interface ShuffleTextProps {
        content: string;
    }

    const ShuffleText: React.FC<ShuffleTextProps>;

    export default ShuffleText;
}
