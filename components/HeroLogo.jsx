import Image from "next/image";
import { useState, useEffect } from "react";

const LogoWithGradient = () => {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((hue) => (hue + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const gradient = `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${
    hue + 120
  }, 100%, 50%), hsl(${hue + 240}, 100%, 50%))`;

  return (
    <div style={{ backgroundImage: gradient }}>
      <Image
        src="/LOGO_02.png"
        alt="Logo with transparent M"
        width={500}
        style={{ zIndex: 10 }}
        height={500}
      />
    </div>
  );
};

export default LogoWithGradient;
