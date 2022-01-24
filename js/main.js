window.onload = function() {
  const anchors = document.getElementsByTagName('a');
  for(let i = 0; i < anchors.length; i++) {
    let anchor = anchors[i];
    anchor.onclick = function() {
      document.getElementsByClassName('active')[0].classList.remove('active');
      anchor.classList.add('active');
    }
  }
}
