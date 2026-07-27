export const motionTokens = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.25,
    base: 0.55,
    slow: 0.7,
  },
  distance: {
    reveal: 20,
  },
  stagger: 0.06,
} as const;
