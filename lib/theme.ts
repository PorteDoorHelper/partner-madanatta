// Основные цвета темы
export const colors = {
  primary: {
    DEFAULT: "#0070f3", // Основной цвет бренда
    light: "#3291ff",
    dark: "#0761d1",
  },
  secondary: {
    DEFAULT: "#7928ca",
    light: "#8a3fd1",
    dark: "#6622aa",
  },
  accent: {
    DEFAULT: "#f5a623",
    light: "#f7b955",
    dark: "#e09612",
  },
  background: {
    DEFAULT: "#ffffff",
    dark: "#111111",
  },
  text: {
    DEFAULT: "#333333",
    light: "#666666",
    dark: "#ffffff",
  },
  border: {
    DEFAULT: "#eaeaea",
    dark: "#333333",
  },
}

// Настройки типографики
export const typography = {
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    serif: ["Georgia", "serif"],
    mono: ["Menlo", "Monaco", "Courier New", "monospace"],
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
}

// Настройки макета
export const layout = {
  containerMaxWidth: "1400px",
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  borderRadius: {
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
}

// Настройки анимации
export const animation = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  },
}

// Настройки теней
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
}

// Настройки брейкпоинтов
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

// Экспорт всех настроек темы
export const theme = {
  colors,
  typography,
  layout,
  animation,
  shadows,
  breakpoints,
}

export default theme
