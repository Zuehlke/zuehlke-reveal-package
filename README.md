<p align="center"><a href="https://github.com/Zuehlke"><img src="https://raw.githubusercontent.com/romanutti/zuehlke-reveal-package/feature/new-slidedeck/src/assets/img/zuehlke-logo.jpg" alt="Zuehlke Logo" height="90"/></a></p>
<h1 align="center">Zühlke Reveal.js Package</h1>
<p align="center">Package to easily create Zühlke branded reveal.js presentations.</p>

<p align="center">
	<a href="https://github.com/romanutti/zuehlke-reveal-package/graphs/contributors"><img src="https://img.shields.io/github/contributors/romanutti/zuehlke-reveal-package"></a>
  <a href="https://github.com/romanutti/zuehlke-reveal-package/commits/main"><img src="https://img.shields.io/github/last-commit/romanutti/zuehlke-reveal-package" ></a>

</p><br/><br/>

Reveal.js is an open source HTML presentation framework. It enables anyone with a web browser to create beautiful presentations. The framework comes with a powerful feature set including [nested slides](https://revealjs.com/vertical-slides/), [markdown support](https://revealjs.com/markdown/), [syntax highlighted code](https://revealjs.com/code/) and an [extensive API](https://revealjs.com/api/).

This repo contains everything needed to create Zühlke branded reveal.js presentations.
A demo is visble at [zuehlke-reveal-demo](https://romanutti.github.io/zuehlke-reveal-demo)

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

Consult the [official documentation of reveal.js](https://revealjs.com) for further information on how to use reveal.js.

## Contributing

See the [CONTRIBUTING] document.
Thank you, [contributors]!

[CONTRIBUTING]: CONTRIBUTING.md
[contributors]: https://github.com/romanutti/zuehlke-reveal-package/graphs/contributors

## License

Copyright (c) 2022 Zühlke. The repo contains free software, and may be redistributed
under the terms specified in the [LICENSE] file.

[LICENSE]: LICENSE