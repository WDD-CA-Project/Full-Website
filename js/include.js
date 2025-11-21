alert("ok");

fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbarAdd").innerHTML = data;
	  
	document.querySelectorAll('.nav-link').forEach(link => {
	if(link.href === window.location.href) {
    link.classList.add('active');
    link.setAttribute('aria-current','page');
  }
});

});

// Styling menu buttons, coloring, effects when accessing page

