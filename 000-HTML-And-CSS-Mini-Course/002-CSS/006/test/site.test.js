import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, globSync } from 'node:fs';
import { dirname, join } from 'node:path';

const notDeps = (path) => !path.includes('node_modules');
const pages = globSync('**/*.html').filter(notDeps);
const styles = globSync('**/*.css').filter(notDeps);

test('the exercise has a page', () => {
    assert.ok(pages.length > 0, 'no .html file found');
});

for (const page of pages) {
    test(`${page} only links to files that exist`, () => {
        const html = readFileSync(page, 'utf8');
        for (const [, ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
            if (/^(#|[a-z]+:|\/)/i.test(ref)) continue; // anchors, external URLs, mailto:, root-relative placeholder links
            const file = join(dirname(page), decodeURI(ref.split(/[?#]/)[0]));
            assert.ok(existsSync(file), `${ref} is missing`);
        }
    });
}

for (const file of [...pages, ...styles]) {
    test(`${file} is solved`, () => {
        assert.doesNotMatch(readFileSync(file, 'utf8'), /\bTODO\b/);
    });
}
