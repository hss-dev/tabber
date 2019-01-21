import Tabber from './tabber.js';

try {
    customElements.define("tab-link", Tabber);
} catch (err) {
    console.error(err);
    const h3 = document.createElement("h3");
    h3.innerHTML =
        "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!";
    document.body.appendChild(h3);
}
