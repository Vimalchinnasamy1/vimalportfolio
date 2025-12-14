function openCert(img) {
  document.getElementById("certModal").style.display = "flex";
  document.getElementById("certImage").src = img;
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}
