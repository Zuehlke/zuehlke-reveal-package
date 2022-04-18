import 'reveal.js/dist/reveal.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './styles/zuehlke.css';
import './styles/zuehlke-chapter.css';
import './styles/zuehlke-print.css';
import './styles/zuehlke-toc.css';

import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";

export function setupZuehlkeRevealPresentation(): Promise<Reveal> {
    const deck = new Reveal(document.querySelector(`.reveal`), {
        history: true,
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
    });
    return deck.initialize().then(() => {
        deck.getPlugin("highlight").hljs.highlightAll();
        return deck;
    });
}

globalThis.setupZuehlkeRevealPresentation = setupZuehlkeRevealPresentation;