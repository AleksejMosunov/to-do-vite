export const useLogin = () => {
  const API_URL = import.meta.env.VITE_BACK_URL + "/auth/login";

  const login = async (name: string, password: string) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.access_token);
        return data;
      } else {
        console.error("Login failed:", data);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return { login };
};
