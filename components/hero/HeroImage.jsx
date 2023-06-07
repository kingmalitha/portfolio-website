// import React from "react";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const HeroImage = () => {
//   const profileVariants = {
//     initial: {
//       borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
//     },
//     animate: {
//       borderRadius: [
//         "60% 40% 30% 70% / 60% 30% 70% 40%",
//         "30% 60% 70% 40% / 50% 60% 40% 70%",
//         "60% 40% 30% 70% / 60% 30% 70% 40%",
//       ],
//       transition: {
//         duration: 8,
//         ease: "easeInOut",
//         repeat: Infinity,
//         repeatDelay: 1,
//       },
//     },
//   };
//   return (
//     <motion.div
//       className="relative"
//       initial="initial"
//       animate="animate"
//       variants={profileVariants}
//     >
//       <Image src="/hero-image.png" alt="hero-image" width={500} height={500} />
//     </motion.div>
//   );
// };

// export default HeroImage;

import { motion, AnimatePresence } from "framer-motion";

const variants = {
  animate: {
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 40% 70%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
    ],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 1,
    },
  },
};

export default function HeroImage() {
  return (
    <AnimatePresence>
      <motion.img
        src="/hero-image-2.png"
        alt="My Image"
        variants={variants}
        initial="initial"
        animate="animate"
        className="border-8 border-[#222] w-[300px] lg:w-[500px] "
      />
    </AnimatePresence>
  );
}
