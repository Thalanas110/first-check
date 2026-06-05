import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const bikolanoIds = [1, 2, 3, 4, 7, 8, 9, 10, 11, 12];
const englishIds = [5, 6];

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
}

function poemBlock(source, id) {
  const marker = `id: ${id},`;
  const start = source.indexOf(marker);

  assert.notEqual(start, -1, `expected poem ${id} to exist`);

  const rest = source.slice(start + marker.length);
  const nextMatch = rest.match(/\r?\n\s*\{\r?\n\s*id:\s*\d+,/);
  const nextStart = nextMatch === null ? -1 : start + marker.length + nextMatch.index;
  return source.slice(start, nextStart === -1 ? undefined : nextStart);
}

test('Bikolano poems are marked with language metadata and curated translations', () => {
  const source = read('src/app/poems.service.ts');

  for (const id of bikolanoIds) {
    const block = poemBlock(source, id);

    assert.match(block, /language:\s*'bikolano'/);
    assert.match(block, /translationLines:\s*\[/);
  }
});

test('English poems are marked as English and do not carry translation lines', () => {
  const source = read('src/app/poems.service.ts');

  for (const id of englishIds) {
    const block = poemBlock(source, id);

    assert.match(block, /language:\s*'english'/);
    assert.doesNotMatch(block, /translationLines:\s*\[/);
  }
});

test('poems service exposes stanza grouping for translated lines', () => {
  const source = read('src/app/poems.service.ts');

  assert.match(source, /getStanzas\(lines: ReadonlyArray<string>\): string\[\]\[\]/);
  assert.match(source, /return this\.buildStanzas\(lines\);/);
});

test('poem detail service derives translation state and resets it on poem changes', () => {
  const source = read('src/app/poem-detail/poem-detail.service.ts');

  assert.match(source, /signal\(false\)/);
  assert.match(source, /readonly hasTranslation = computed\(/);
  assert.match(source, /readonly translationStanzas = computed\(/);
  assert.match(source, /toggleTranslation\(\): void/);
  assert.match(source, /this\.translationExpanded\.set\(false\);/);
});

test('poem detail template shows the translation toggle only when a translation exists', () => {
  const source = read('src/app/poem-detail/poem-detail.component.html');

  assert.match(source, /@if \(detail\.hasTranslation\(\)\)/);
  assert.match(source, /Show English translation/);
  assert.match(source, /Hide English translation/);
  assert.match(source, /detail\.translationStanzas\(\)/);
});
