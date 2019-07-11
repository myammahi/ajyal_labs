var ourbutton = document.getElementById("our-button");
var ourheadline = document.getElementById("our-headline");
var listitems = document.getElementById("our-list").getElementsByTagName("li");
for (i = 0; i < listitems.length; i++) {
  listitems[i].addEventListener("click", activateitem);
}
function activateitem() {
  ourheadline.innerHTML = this.innerHTML;
}
ourbutton.addEventListener("click", createnewitem);
