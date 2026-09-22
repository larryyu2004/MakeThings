(() => {
  try {
    const savedTheme = localStorage.getItem("larry-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
