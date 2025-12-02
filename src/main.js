// -------------------------------------------------------
// Swarm Shield — Global Frontend Script (Vite entrypoint)
// -------------------------------------------------------

// Optional: Log that your build is running correctly
console.log("Swarm Shield frontend initialized.");

// Smooth scrolling enhancement (optional)
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Dark mode toggle (if you choose to add one later)
// Example usage: document.documentElement.classList.toggle('dark');
