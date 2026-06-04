const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'app', 'poems.service.ts');
const text = fs.readFileSync(file, 'utf8');

const poemRegex = /\{\s*id:\s*(\d+),[\s\S]*?title:\s*'([^']*)'[\s\S]*?lines:\s*\[([\s\S]*?)\][\s\S]*?\}/g;
let m;
const results = [];
while ((m = poemRegex.exec(text)) !== null) {
  const id = parseInt(m[1], 10);
  const title = m[2];
  const linesBlock = m[3];
  const lineRegex = /'((?:\\'|[^'])*)'/g;
  const lines = [];
  let lm;
  while ((lm = lineRegex.exec(linesBlock)) !== null) {
    lines.push(lm[1]);
  }

  // count stanzas: groups of non-empty lines separated by empty string entries
  let stanzaCount = 0;
  let inStanza = false;
  for (const ln of lines) {
    if (ln === '') {
      if (inStanza) {
        stanzaCount++;
        inStanza = false;
      }
    } else {
      inStanza = true;
    }
  }
  if (inStanza) stanzaCount++;

  results.push({ id, title, stanzaCount });
}

for (const r of results) {
  console.log(`${r.id}\t${r.title}\t${r.stanzaCount}`);
}

console.log('\nTotal poems: ' + results.length);
