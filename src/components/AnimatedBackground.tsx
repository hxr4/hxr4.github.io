import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const circles = [
    { size: 300, duration: 20, delay: 0, x: "10%", y: "20%" },
    { size: 200, duration: 15, delay: 2, x: "80%", y: "60%" },
    { size: 150, duration: 18, delay: 4, x: "60%", y: "80%" },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-5"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y,
            background: "radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
