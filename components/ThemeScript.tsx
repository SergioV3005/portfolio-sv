export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function () {
          try {
            var stored = localStorage.getItem("theme");
            var theme = stored ? stored : "dark";
            var root = document.documentElement;
            if (theme === "dark") {
              root.classList.add("dark");
            } else {
              root.classList.remove("dark");
            }
          } catch (e) {}
        })();
      `,
      }}
    />
  );
}
