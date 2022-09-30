<p align="center"><a href="https://github.com/Zuehlke"><img src="https://raw.githubusercontent.com/Zuehlke/zuehlke-reveal-package/main/src/assets/img/zuehlke-logo.jpg" alt="Zuehlke Logo" height="90"/></a></p>
<h1 align="center">Zühlke Reveal.js Package</h1>
<p align="center">Package to easily create Zühlke branded reveal.js presentations.</p>

<p align="center">
	<a href="https://github.com/Zuehlke/zuehlke-reveal-package/graphs/contributors"><img src="https://img.shields.io/github/contributors/Zuehlke/zuehlke-reveal-package"></a>
  <a href="https://github.com/Zuehlke/zuehlke-reveal-package/commits/main"><img src="https://img.shields.io/github/last-commit/Zuehlke/zuehlke-reveal-package" ></a>

</p><br/><br/>

# Documentation

## Slides
Code examples for the slides can be found [here 📄](https://github.com/Zuehlke/zuehlke-reveal-package/blob/gh-pages/src/slides/)

### Title
Start your presentation using a `title-slide`. This slide usually contains title, date, author and a short description.
A live demo is available [here](https://zuehlke.github.io/zuehlke-reveal-package/#/title-slide).

#### Usage
```html
<section class="title-slide" id="title-slide">
    <h1>Title slide</h1>
    <h2>Date, Author</h2>
    <h3>Tell what the presentation is about</h3>
</section>
```

#### Example
<p align="center">
    <img src="https://raw.githubusercontent.com/Zuehlke/zuehlke-reveal-package/feature/documentation/src/assets/img/examples/title-slide.png" width="700"/>
</p>

#### Logo
The `logo-slide` consist of a logo-only slide.
A live demo is available [here](https://zuehlke.github.io/zuehlke-reveal-package/#/logo-slide).

```html
<section class="logo-slide" id="logo-slide"></section>
```

#### Example
<p align="center">
    <img src="https://raw.githubusercontent.com/Zuehlke/zuehlke-reveal-package/feature/documentation/src/assets/img/examples/logo-slide.png" width="700"/>
</p>

#### Agenda
Use the class `agenda-slide` to create an agenda for your presentation.
The classes `number`and `title` can be used to set your agenda entries.
A live demo is available [here](https://zuehlke.github.io/zuehlke-reveal-package/#/agenda-slide).

```html
<section class="agenda" id="agenda-slide">
    <div class="wrapper">
        <div>
            <span class="number">01</span>
            <span class="title">Introduction</span>
        </div>
        <div>
            <span class="number">02</span>
            <span class="title">About us</span>
        </div>
        <div>
            <span class="number">03</span>
            <span class="title">Why Zühlke?</span>
        </div>
        <div>
            <span class="number">04</span>
            <span class="title">Your goals</span>
        </div>
        <div>
            <span class="number">05</span>
            <span class="title">Our vision</span>
        </div>
        <div>
            <span class="number">06</span>
            <span class="title">Further challenges</span>
        </div>
        <div>
            <span class="number">07</span>
            <span class="title">Summary</span>
        </div>
        <div>
            <span class="number">08</span>
            <span class="title">Q&A</span>
        </div>
    </div>
</section>
```

#### Example
<p align="center">
    <img src="https://raw.githubusercontent.com/Zuehlke/zuehlke-reveal-package/feature/documentation/src/assets/img/examples/agenda-slide.png" width="700"/>
</p>

#### Team
Add the class `team-slide` to the slide's `section` tag and list your team members (`profile` class for each) in a `team` container.
It supports 1-4 profiles per slide, but more are possible when using wider screens.
A live demo is available [here](https://zuehlke.github.io/zuehlke-reveal-package/#/team-slide).

```html
<section class="team-slide" id="team-slide">
    <h2>About us</h2>
    <div class="team">
        <div class="profile">
            <img src="./src/assets/img/portrait.png">
            <h3>Name and Surname</h3>
            <p>Some infos or quotes can be placed here</p>
            <p>joined 2022</p>
        </div>
        <div class="profile">
            <img src="./src/assets/img/portrait.png">
            <h3>Name and Surname</h3>
            <p>Some infos or quotes can be placed here</p>
            <p>joined 2022</p>
        </div>
        <div class="profile">
            <img src="./src/assets/img/portrait.png">
            <h3>Name and Surname</h3>
            <p>Some infos or quotes can be placed here</p>
            <p>joined 2022</p>
        </div>
        <div class="profile">
            <img src="./src/assets/img/portrait.png">
            <h3>Name and Surname</h3>
            <p>Some infos or quotes can be placed here</p>
            <p>joined 2022</p>
        </div>
    </div>
</section>
```

#### Example
<p align="center">
    <img src="https://raw.githubusercontent.com/Zuehlke/zuehlke-reveal-package/feature/documentation/src/assets/img/examples/team-slide.png" width="700"/>
</p>

#### Subtitle
Add the class `subtitle-slide` to add a slide containing only the subtitle of the next topic.
A live demo is available [here](https://zuehlke.github.io/zuehlke-reveal-package/#/subtitle-slide).

```html
<section class="subtitle-slide" id="subtitle-slide">
    <h1>Subtitle slide</h1>
</section>
```

#### Example
<p align="center">
    <img src="https://raw.githubusercontent.com/Zuehlke/zuehlke-reveal-package/feature/documentation/src/assets/img/examples/subtitle-slide.png" width="700"/>
</p>


#### Statement
With the `statement-slide` all the catchy, important points of a presentation can be highlighted.
A live demo is available [here](https://zuehlke.github.io/zuehlke-reveal-package/#/statement-slide).

```html
<section class="statement-slide" id="statement-slide">
    <h1>Statement slide</h1>
    <h2>This slide is great for highlighting all the catchy, important points of a presentation.</h2>
</section>
```

#### Example
<p align="center">
    <img src="https://raw.githubusercontent.com/Zuehlke/zuehlke-reveal-package/feature/documentation/src/assets/img/examples/statement-slide.png" width="700"/>
</p>

### Features
#### Side-by-side comparison
The `comparison` class allows side-by-side comparisons in two or more columns (one column per child element) of both code samples and regular text content.

#### Tips
Using the class `tip` (usually on a fragment) displays a purple text box across the slide. This is useful for additional information, hints or tips related to the current slide.

#### Highlighting text
Highlight parts of your text in a bold Zühlke gradient with the `hl` class.

#### Inline code snippets
Use the `code` class for generic inline code snippets (like in this sentence). There is no special syntax highlighting.

#### Automatic numbering
On «table of contents» slides (TOC): Add the class `counter` to chapter headings (`h2`) for automatic numbering.

## Contributing

See the [CONTRIBUTING] document.
Thank you, [contributors]!

[CONTRIBUTING]: CONTRIBUTING.md
[contributors]: https://github.com/Zuehlke/zuehlke-reveal-package/graphs/contributors

## License

Copyright (c) 2022 Zühlke. The repo contains free software, and may be redistributed
under the terms specified in the [LICENSE] file.

[LICENSE]: LICENSE
