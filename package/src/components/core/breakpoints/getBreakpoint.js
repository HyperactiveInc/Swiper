import { window } from 'ssr-window';

export default function (breakpoints) {
  // Get breakpoint for window width
  if (!breakpoints) return undefined;
  let breakpoint = false;

  const points = Object.keys(breakpoints).map((point) => {
<<<<<<< HEAD
    if (typeof point === 'string' && point.startsWith('@')) {
=======
    if (typeof point === 'string' && point.indexOf('@') === 0) {
>>>>>>> 71efce4731e9ee6ac9544ef3b7bc25c1e52388fe
      const minRatio = parseFloat(point.substr(1));
      const value = window.innerHeight * minRatio;
      return { value, point };
    }
    return { value: point, point };
  });

  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const { point, value } = points[i];
    if (value <= window.innerWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}
