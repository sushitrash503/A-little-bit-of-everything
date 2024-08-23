function isMobileDevice() {
    return window.innerWidth <= 768; // Puedes ajustar el ancho si es necesario
  }
  
  function showPopup() {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
  }
  
  function closePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
  }
  
  if (isMobileDevice()) {
    showPopup();
  }
  function makeDraggable(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
    if (document.querySelector(".window-header")) {
      document.querySelector(".window-header").onmousedown = dragMouseDown;
    } else {
      element.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
  makeDraggable(document.getElementById("draggable-window"));
  
  document.getElementById("toggle-button").addEventListener("click", function() {
    var content = document.getElementById("window-content");
    var button = document.getElementById("toggle-button");
  
    if (content.style.display === "none") {
      content.style.display = "block";
      button.textContent = "Cerrar";
    } else {
      content.style.display = "none";
      button.textContent = "Abrir";
    }
    
  });
  // Drag and drop functionality
function makeDraggable(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
    if (document.querySelector(".player-header")) {
      document.querySelector(".player-header").onmousedown = dragMouseDown;
    } else {
      element.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
  makeDraggable(document.querySelector('.music-player'));
  
  // Music player controls
  document.getElementById('play-button').addEventListener('click', function() {
    document.getElementById('audio').play();
  });
  
  document.getElementById('pause-button').addEventListener('click', function() {
    document.getElementById('audio').pause();
  });
  
  document.getElementById('stop-button').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
  });
  
