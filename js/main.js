/* Theme */
const COLOR_THEME = {
  light: "light",
  dark: "dark",
};

// 初期表示時処理
window.onload = () => {
  const toggle = document.querySelector("#theme-toggle");
  const toggleLabel = document.querySelector(".theme-toggle__label");

  toggle.addEventListener("click", () => {
    setTheme(toggle.checked ? COLOR_THEME.light : COLOR_THEME.dark);
  });
  const setTheme = function (theme) {
    if (theme === COLOR_THEME.light || theme === COLOR_THEME.dark) {
      document.body.className = `vsc-initialized theme__${theme}`;
      toggle.innerHTML = `<span class="material-symbols-outlined"> ${theme}_mode </span>`;
      toggleLabel.className = `theme-toggle__label noselect ${theme}`;
    }
  };
  setTheme(toggle.checked ? COLOR_THEME.light : COLOR_THEME.dark);
};
