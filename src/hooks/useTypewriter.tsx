import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  typingSpeed?: number;
  pauseTime?: number;
  repetitions?: number;
}

export const useTypewriter = (
  arrText: string[],
  {
    typingSpeed = 100,
    pauseTime = 1000,
    repetitions = -1,
  }: UseTypewriterOptions
) => {
  const [typedText, setTypedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    if (!arrText.length) return;

    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      interval = setInterval(() => {
        setTypedText((prev) => prev.slice(0, -1));
      }, typingSpeed);
    } else {
      interval = setInterval(() => {
        const currentText = arrText[currentIndex];
        setTypedText((prev) => currentText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (isDeleting && typedText === "") {
      clearInterval(interval);
      const nextIndex = (currentIndex + 1) % arrText.length;
      if (nextIndex === 0 && repetitions === 0) {
        clearInterval(interval);
        return;
      }
      setCurrentIndex(nextIndex);
      setIsDeleting(false);
      if (repetitions > 0) {
        repetitions--;
      }
    } else if (!isDeleting && typedText === arrText[currentIndex]) {
      clearInterval(interval);
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [
    arrText,
    typedText,
    isDeleting,
    currentIndex,
    typingSpeed,
    pauseTime,
    repetitions,
  ]);

  return typedText;
};
