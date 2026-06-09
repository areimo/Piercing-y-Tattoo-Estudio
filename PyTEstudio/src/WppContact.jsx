import React, { useState, useEffect } from "react";
import whatsapp from "/src/assets/whatsapp.png";

const WppContact = () => {
  const phoneNumber = "59893878696";
  const message = "Hola, estoy interesad@ en un tatuaje...";
  const wppLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  const [size, setSize] = useState(90); 

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width <= 600) { 
        setSize(70); 
      } else if (width <= 1024) { 
        setSize(80); 
      } else { 
        setSize(90); 
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <a href={wppLink} target="_blank" rel="noopener noreferrer">
      <img
        src={whatsapp}
        alt="WhatsApp"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          position: "fixed",
          right: "1.5rem", 
          bottom: "5rem", 
          zIndex: 1000,
          borderRadius: "50%",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)" 
        }}
        onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </a>
  );
};

export default WppContact;


