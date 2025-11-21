alert("ok");

fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbarAdd").innerHTML = data;
});

// Icons

<script src="https://kit.fontawesome.com/57a310552d.js" crossorigin="anonymous"></script>

//