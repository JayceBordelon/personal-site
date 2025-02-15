import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  children: React.ReactNode;
}

export default function TypeWriter({ children }: TypewriterProps) {
  const [genTitle, setGenTitle] = useState<string>('');
  const [seed, setSeed] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const [inViewport, setInViewport] = useState<boolean>(false);
  const titleRef = useRef<HTMLDivElement>(null);

  const title = typeof children === 'string' ? children : '';

  const generateSpaces = (length: number): string => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += ' ';
    }
    return result;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInViewport(true);
        } else {
          setInViewport(false);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = titleRef.current; // Copy the ref to a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (inViewport) {
      setGenTitle('');
      setSeed(0);
      setFinished(false);
    }
  }, [inViewport]);

  useEffect(() => {
    if (!inViewport || finished) return;

    const interval = setInterval(() => {
      setGenTitle((prev) => prev + title[seed]);
      setSeed((prevSeed) => prevSeed + 1);

      if (seed >= title.length - 1) {
        clearInterval(interval);
        setFinished(true);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [inViewport, seed, title, finished]);

  return (
    <div ref={titleRef}>
      {!finished ? (
        <>
          {genTitle} {generateSpaces(title.length - seed - 1)}|
        </>
      ) : (
        children
      )}
    </div>
  );
}
