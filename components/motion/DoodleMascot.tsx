"use client";

import { motion } from "framer-motion";

export function DoodleMascot() {
  const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 10,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <div className="flex h-64 w-64 items-center justify-center">
      <svg
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-text-primary"
      >
        <g id="face" transform="rotate(-12 317 246)">
          {/* Head */}
          <motion.path
            id="head"
            {...strokeProps}
            d="M312,108 C270,104 226,122 202,152 C180,180 172,222 180,262 C186,296 208,332 248,355 C292,381 352,384 396,357 C438,331 462,286 458,238 C455,196 432,156 394,132 C368,116 340,111 312,108Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Hair */}
          <motion.path {...strokeProps} d="M232 178 L202 144" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.3 }} />
          <motion.path {...strokeProps} d="M280 138 L270 98" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.3 }} />
          <motion.path {...strokeProps} d="M345 128 L345 88" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.3 }} />
          <motion.path {...strokeProps} d="M408 140 L420 98" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.3 }} />

          {/* Glasses */}
          <motion.path
            id="glasses"
            {...strokeProps}
            d="M235 210 Q235 180 265 180 L325 180 Q355 180 355 210 L355 250 Q355 280 325 280 L265 280 Q235 280 235 250Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
          <motion.path {...strokeProps} d="M355 225 L385 225" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.2 }} />
          <motion.path
            {...strokeProps}
            d="M385 210 Q385 180 415 180 L475 180 Q505 180 505 210 L505 250 Q505 280 475 280 L415 280 Q385 280 385 250Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />

          {/* Eyes (Blinking) */}
          <motion.circle
            cx="295"
            cy="228"
            r="6"
            fill="currentColor"
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 0.98, 1] }}
          />
          <motion.circle
            cx="445"
            cy="228"
            r="6"
            fill="currentColor"
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 0.98, 1] }}
          />

          {/* Smile */}
          <motion.path
            {...strokeProps}
            d="M336 305 Q350 322 364 305"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.3, duration: 0.3 }}
          />
        </g>

        {/* Neck */}
        <motion.path
          {...strokeProps}
          d="M318 384 C316 398 328 410 345 420"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        />

        {/* Body */}
        <motion.path
          id="body"
          {...strokeProps}
          d="M206 734 C200 588 244 466 345 420 C453 469 496 586 493 734"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        />

        {/* Left arm */}
        <motion.path
          id="left-arm"
          {...strokeProps}
          d="M255 468 C208 500 172 565 172 640"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
        />

        {/* Right arm (Waving) */}
        <motion.g
          id="right-arm"
          style={{ transformOrigin: "447px 468px" }}
          animate={{ rotate: [-10, 5, -10], y: [-5, 5, -5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            {...strokeProps}
            d="M447 468 C560 420 650 300 650 150"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          />
          <motion.path
            {...strokeProps}
            d="M650 150 C666 134 689 135 700 152 C710 169 706 192 689 202 C671 212 648 206 639 188 C633 176 637 160 650 150Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2, duration: 0.3 }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
