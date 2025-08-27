// utils/auth.ts
export const getToken = () => {
  if (typeof window === "undefined") return null; // for SSR
  return localStorage.getItem("token");
};
