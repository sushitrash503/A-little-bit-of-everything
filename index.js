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
  
