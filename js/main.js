function findRoute() {
  const routes = {
    "Giraffe-Flamingo": "img/giraffe-flamingo.svg",
    "Red Panda-Sumatran Tiger": "img/Panda-tiger.svg",
  };

  const from = document.getElementById("from").value;
  const to = document.getElementById("destination").value;
  const routeOverlay = document.getElementById("routeOverlay");

  let key = `${from}-${to}`;

  if (!routes[key]) {
    const reverseKey = `${to}-${from}`;
    if (routes[reverseKey]) {
      key = reverseKey;
    }
  }
  console.log("key", key);
  if (routes[key]) {
    routeOverlay.src = routes[key];
    routeOverlay.classList.remove("hidden");
  } else {
    routeOverlay.classList.add("hidden");
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// remove this part below kalo gk mau the zoom thingy 
document.addEventListener("DOMContentLoaded", function () {
  const map = document.querySelector(".mapContainer");
  const zooMap = document.getElementById("zooMap");
  const routeOverlays = document.querySelectorAll(".routeOverlay");

  let currentZoom = 1;
  const inc = 0.05;
  const minZoom = 1;
  const maxZoom = 3;

  map.addEventListener("wheel", function (event) {
    if (event.ctrlKey) {
      event.preventDefault();

      if (event.deltaY < 0) {
        currentZoom += inc;
        if (currentZoom > maxZoom) currentZoom = maxZoom;
      } else {
        currentZoom -= inc;
        if (currentZoom < minZoom) currentZoom = minZoom;
      }

      const updatedWidth = currentZoom * 100 + "%";

      zooMap.style.width = updatedWidth;
      
      routeOverlays.forEach(function (overlayItem) {
        overlayItem.style.width = updatedWidth;
      });
    }
  }, { passive: false });
});

