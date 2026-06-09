import React, { useState, useEffect } from "react";
import instagram from "/src/assets/instagram.png";

const IGContact = () => {
  const igLink = "https://www.instagram.com/piercingytattooestudio/";

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
    <a href={igLink} target="_blank" rel="noopener noreferrer">
      <img
        src={instagram}
        alt="Instagram"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          borderRadius: "50%",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)" 
        }}
        onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </a>
  );
};

export default IGContact;

