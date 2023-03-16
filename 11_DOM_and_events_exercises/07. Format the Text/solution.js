function solve() {
  const text = document.getElementById('input');
  const target = document.getElementById('output')

  let sentences = text.value.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
  let paragraphs = Math.ceil(sentences.length / 3);

  for (let i = 0; i < paragraphs; i++) {
    let p = document.createElement('p');
    for (let i = 0; i < 3; i++) {
      p.textContent += sentences.shift();
      if (sentences.length === 0) {
        break;
      }
    }
    target.appendChild(p);
  }
}