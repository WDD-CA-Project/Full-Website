alert("ok");

fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbarAdd").innerHTML = data;
});

