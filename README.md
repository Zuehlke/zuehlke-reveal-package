# Zühlke Reveal Package

Package to easily create Zühlke branded [reveal.js](https://revealjs.com) presentations.

## Usage

Replace `<COMMIT_HASH>` in the following snippets with the hash from the latest [commit on the `release` branch](https://github.com/webplatformz/zuehlke-reveal-package/commits/release). 

Include the **stylesheet** in all TOC and chapter files:
```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/webplatformz/zuehlke-reveal-package@<COMMIT_HASH>/release/index.css">
```

Load and run the **script** in all chapter files:
```html
<script src="https://cdn.jsdelivr.net/gh/webplatformz/zuehlke-reveal-package@<COMMIT_HASH>/release/index.js"></script>
<script>
	setupZuehlkeRevealPresentation();
</script>
```

Consult the [official documentation of reveal.js](https://revealjs.com) for how to use it.
