import { useState, useEffect } from 'react';

interface RandomizedTitleProps {
    children: React.ReactNode;
}

export default function RandomizedTitle({ children }: RandomizedTitleProps) {
    const [genTitle, setGenTitle] = useState<string>('');
    const [seed, setSeed] = useState<number>(0);
    const [finished, setFinished] = useState<boolean>(false);

    const title = typeof children === 'string' ? children : '';

    const generateSpaces = (length: number): string => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += ' ';
        }
        return result;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (seed >= title.length) {
                clearInterval(interval);
                setFinished(true);
            } else {
                const nextChar = title[seed];
                setGenTitle((prev) => prev + nextChar);
                setSeed((prevSeed) => prevSeed + 1);
            }
        }, 25);

        return () => clearInterval(interval);
    }, [seed, title]);

    return (
        <>
            {!finished ? (
                <>
                    {genTitle} {generateSpaces(title.length - seed - 1)}|
                </>
            ) : (
                children
            )}
        </>
    );
}
