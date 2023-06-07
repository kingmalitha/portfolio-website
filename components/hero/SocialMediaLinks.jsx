import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SocialMediaLinks = ({ link, title, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 3 + delay }}
    >
      <Link href={link} className="hero-social">
        {React.createElement(icon, { size: 30 })} {title}
      </Link>
    </motion.div>
  );
};

export default SocialMediaLinks;
