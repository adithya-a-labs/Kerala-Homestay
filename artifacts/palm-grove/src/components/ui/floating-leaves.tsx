import { motion } from "framer-motion";

function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 58C20 58 2 42 2 24C2 13.5 10 4 20 4C30 4 38 13.5 38 24C38 42 20 58 20 58Z"
        stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"
      />
      <path d="M20 58V20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M20 36C20 36 10 30 6 22" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      <path d="M20 30C20 30 30 24 34 16" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

const leaves = [
  { top: "8%",  left: "2%",  size: 48, delay: 0,   dur: 7,  rot: -20, amp: 12 },
  { top: "18%", right: "3%", size: 36, delay: 1.5, dur: 9,  rot: 30,  amp: 8  },
  { top: "50%", left: "1%",  size: 28, delay: 0.8, dur: 11, rot: -40, amp: 15 },
  { top: "70%", right: "2%", size: 44, delay: 2,   dur: 8,  rot: 15,  amp: 10 },
  { top: "35%", left: "4%",  size: 22, delay: 3,   dur: 13, rot: -55, amp: 18 },
  { top: "85%", right: "5%", size: 32, delay: 1,   dur: 10, rot: 45,  amp: 7  },
];

export function FloatingLeaves() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {leaves.map((l, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10"
          style={{
            top: l.top,
            left: "left" in l ? l.left : undefined,
            right: "right" in l ? (l as { right: string }).right : undefined,
            width: l.size,
            height: l.size * 1.5,
            rotate: l.rot,
          }}
          animate={{
            y: [0, -l.amp, l.amp * 0.5, 0],
            rotate: [l.rot, l.rot + 6, l.rot - 4, l.rot],
          }}
          transition={{
            duration: l.dur,
            delay: l.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
}
