function solve() {
  const text = document.getElementById('input');
  const target = document.getElementById('output')

  let sentences = text.value.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);

  while (sentences.length > 0) {
    p = document.createElement('p');
    p.textContent = sentences.splice(0, 3);
    target.appendChild(p);
  }
}