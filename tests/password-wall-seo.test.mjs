import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const baseUrl = 'https://annah-claire-1.netlify.app';

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
}

function normalize(value) {
  return value.replace(/\s+/g, ' ').trim().toLowerCase();
}

test('locked page public copy targets Annah Claire first-monthsary searches', () => {
  const template = normalize(read('src/app/password/password.component.html'));

  assert.match(template, /annah claire/);
  assert.match(template, /first monthsary/);
  assert.match(template, /12 poems/);
});

test('locked page does not leak any poem titles', () => {
  const template = read('src/app/password/password.component.html');
  const poemsService = read('src/app/poems.service.ts');
  const titleMatches = [...poemsService.matchAll(/title:\s*'([^']+)'/g)];

  assert.ok(titleMatches.length > 0, 'expected to extract poem titles from poems service');

  for (const [, title] of titleMatches) {
    assert.equal(
      template.includes(title),
      false,
      `locked page should not reveal poem title "${title}"`
    );
  }
});

test('document head contains locked-page SEO and social metadata', () => {
  const indexHtml = read('src/index.html');

  assert.match(indexHtml, /<title>.*Annah Claire.*First Monthsary.*<\/title>/i);
  assert.match(indexHtml, /<meta\s+name="description"\s+content="[^"]*Annah Claire[^"]*first monthsary[^"]*12 poems[^"]*"/i);
  assert.match(indexHtml, new RegExp(`<link\\s+rel="canonical"\\s+href="${baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*/?>`, 'i'));
  assert.match(indexHtml, /<meta\s+property="og:title"\s+content="[^"]*Annah Claire[^"]*"/i);
  assert.match(indexHtml, /<meta\s+property="og:description"\s+content="[^"]*first monthsary[^"]*"/i);
  assert.match(indexHtml, new RegExp(`<meta\\s+property="og:url"\\s+content="${baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*/?>`, 'i'));
  assert.match(indexHtml, /<meta\s+property="og:image"\s+content="[^"]*bg\.png"/i);
  assert.match(indexHtml, /<meta\s+name="twitter:card"\s+content="summary_large_image"/i);
  assert.match(indexHtml, /<meta\s+name="twitter:title"\s+content="[^"]*Annah Claire[^"]*"/i);
  assert.match(indexHtml, /<meta\s+name="twitter:description"\s+content="[^"]*first monthsary[^"]*"/i);
  assert.match(indexHtml, /<meta\s+name="twitter:image"\s+content="[^"]*bg\.png"/i);
});
