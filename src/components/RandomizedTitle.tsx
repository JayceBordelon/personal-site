import { useState, useEffect } from 'react';

interface RandomizedTitleProps {
    title: string;
}

export default function RandomizedTitle({ title }: RandomizedTitleProps) {
    const [genTitle, setGenTitle] = useState<string>('');
    const [seed, setSeed] = useState<number>(0);
    const [changingChar, setChangingChar] = useState<string>('');
    const [remainingString, setRemainingString] = useState<string>('');
    const [finished, setFinished] = useState<boolean>(false);

    const generateRandomString = (length: number): string => {
        const characters = '!@#$%^&*(){}[]:".<>/?~,';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    };

    const staticRandomPart = generateRandomString(title.length);

    useEffect(() => {

        setRemainingString(staticRandomPart.substring(seed - 1));
        const interval = setInterval(() => {
            if (seed > title.length) {
                clearInterval(interval);
                setFinished(true);
            } else {
                const randomChar = generateRandomString(1);
                setChangingChar(randomChar == undefined ? "" : randomChar);
            }
        }, 35);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const correctInterval = setInterval(() => {
            if (seed <= title.length) {
                setGenTitle((prev) => {
                    if (prev.length == title.length) {
                        clearInterval(correctInterval);
                        setFinished(true);
                        return title;
                    } else {
                        return prev + title[seed];
                    }
                });
                setSeed((prevSeed) => prevSeed + 1);
            }
        }, 35);
        return () => clearInterval(correctInterval);
    }, [seed, title]);

    return (
        <>

            {!finished ? (
                <>
                    {genTitle}
                    {changingChar}
                    {remainingString.slice(seed)}
                </>
            ) : title}
        </>
    );
}
