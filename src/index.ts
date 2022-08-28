import 'reveal.js/dist/reveal.css';
import './styles/googlecode.css';
import './styles/zuehlke.css';
import './styles/zuehlke-logo-slide.css';
import './styles/zuehlke-title-slide.css';
import './styles/zuehlke-subtitle-slide.css';
import './styles/zuehlke-agenda-slide.css';
import './styles/zuehlke-exercise-slide.css';
import './styles/zuehlke-break-slide.css';
import './styles/zuehlke-print.css';

import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";

export function setupZuehlkeRevealPresentation(): Promise<Reveal> {
    const deck = new Reveal(document.querySelector(`.reveal`), {
        history: true,
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
    });
    return deck.initialize({
        pdfSeparateFragments: false,
    }).then(() => {
        deck.getPlugin("highlight").hljs.highlightAll();
        return deck;
    });
}

globalThis.setupZuehlkeRevealPresentation = setupZuehlkeRevealPresentation;