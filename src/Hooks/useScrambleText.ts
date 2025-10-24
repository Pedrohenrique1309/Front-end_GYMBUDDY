import { useEffect, useState } from 'react'

interface UseScrambleTextOptions {
  text: string
  speed?: number // velocidade da animação em ms
  scrambleSpeed?: number // velocidade de troca de caracteres
  delay?: number // delay antes de começar
  characters?: string // caracteres para usar no scramble
}

export const useScrambleText = ({
  text,
  speed = 50,
  scrambleSpeed = 30,
  delay = 0,
  characters = '0123456789%+kK',
}: UseScrambleTextOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      let scrambleInterval: NodeJS.Timeout;
      
      const revealNextChar = () => {
        if (currentIndex <= text.length) {
          const revealed = text.slice(0, currentIndex);
          const scrambleCount = Math.max(0, text.length - currentIndex);
          
          // Cria caracteres aleatórios para a parte não revelada
          let scrambled = '';
          for (let i = 0; i < scrambleCount; i++) {
            const randomChar = characters[Math.floor(Math.random() * characters.length)];
            scrambled += randomChar;
          }
          
          setDisplayText(revealed + scrambled);
          currentIndex++;
          
          if (currentIndex > text.length) {
            clearInterval(scrambleInterval);
            setDisplayText(text);
            setIsComplete(true);
          }
        }
      };
      
      // Inicia com scramble completo
      let initialScramble = '';
      for (let i = 0; i < text.length; i++) {
        initialScramble += characters[Math.floor(Math.random() * characters.length)];
      }
      setDisplayText(initialScramble);
      
      // Atualiza o scramble rapidamente
      const scrambleUpdater = setInterval(() => {
        const revealed = text.slice(0, currentIndex);
        const scrambleCount = Math.max(0, text.length - currentIndex);
        
        let scrambled = '';
        for (let i = 0; i < scrambleCount; i++) {
          const randomChar = characters[Math.floor(Math.random() * characters.length)];
          scrambled += randomChar;
        }
        
        if (currentIndex < text.length) {
          setDisplayText(revealed + scrambled);
        }
      }, scrambleSpeed);
      
      // Revela caracteres gradualmente
      scrambleInterval = setInterval(revealNextChar, speed);
      
      return () => {
        clearInterval(scrambleInterval);
        clearInterval(scrambleUpdater);
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, scrambleSpeed, delay, characters]);

  return { displayText, isComplete };
};
