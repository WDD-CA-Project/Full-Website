alert("ok");
document.addEventListener("DOMContentLoaded", () => {

// The fetch actions work only in GitHub. 
//Add NavBar and Menu selection
  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
      // Insert navbar 
      document.getElementById("navbarAdd").innerHTML = data;

      // ACTIVE LINK on principal NAVBAR
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.pathname === window.location.pathname) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        }
      });
	  
    })
	
	fetch("components/submenu.html")
		.then(response => response.text())
		.then(data => {
		  // Insert Submenu
		  document.getElementById("submenuAdd").innerHTML = data;
		  
		document.querySelectorAll('.buttonMenu a').forEach(link => {
			if (link.pathname === window.location.pathname) {
			  // the tag a recibes: 
			  link.parentElement.classList.add("buttonMenuActive");
			}
      });
	  
	  	document.querySelectorAll('.buttonMenu li').forEach(link => {
        if (link.pathname === window.location.pathname) {
          // the tag li recibes: 
          link.parentElement.classList.add("buttonMenuActive");
        }
      });
	  
    })
	
	
	
    .catch(err => {
      console.error("Error loading navbar:", err);
    });
	
	
	fetch("components/footer.html")
		.then(response => response.text())
		.then(data => {
		  // Insert footer 
		  document.getElementById("footerAdd").innerHTML = data;
    })
	
});






//Still not working properly online. 
// Button Active in SUBMENU
    document.querySelectorAll('.buttonMenu a').forEach(link => {
        if (link.pathname === window.location.pathname) {
          // the tag a recibes: 
          link.parentElement.classList.add("buttonMenuActive");
        }
      });
	  
	document.querySelectorAll('.buttonMenu li').forEach(link => {
        if (link.pathname === window.location.pathname) {
          // the tag li recibes: 
          link.parentElement.classList.add("buttonMenuActive");
        }
      });



