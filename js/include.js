alert("ok");
document.addEventListener("DOMContentLoaded", () => {

  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      // Insertar el navbar en el div
      document.getElementById("navbarAdd").innerHTML = data;

      // 🔹 Marcar el link activo del NAV principal
      document.querySelectorAll(".nav-link").forEach(link => {
        if (link.pathname === window.location.pathname) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      });

      // 🔹 Marcar los botones del sub-menú si querés (opcional)
      document.querySelectorAll(".buttonMenu").forEach(link => {
        if (link.pathname === window.location.pathname) {
          link.classList.add("buttonMenuActive");
          link.setAttribute("aria-current", "page");
        }
      });
    })
    .catch(err => {
      console.error("Error cargando navbar:", err);
    });

});