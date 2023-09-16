import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ScrollButton } from './Scroll.styled';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {showScrollButton && (
        <ScrollButton onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTop;
