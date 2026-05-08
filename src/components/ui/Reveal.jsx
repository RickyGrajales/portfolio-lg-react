import { useReveal } from '../../hooks/UseReveal';

export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.85s ${delay}s ease, transform 0.85s ${delay}s ease`,
        ...style
      }}
    >
      {children}
    </div>
  );
}