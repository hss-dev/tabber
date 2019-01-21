const getStyle = () => {
  return ` .tabs {
                  background-color: #d0d2d2;
                  border-top-left-radius: 14px;
                  border-top-right-radius: 14px;
            }

           .tabs-back {
                  margin: 0;
                  height: 30px;
                  background-color: grey;
            }

           .current {
                  background-color: white;
            }
          `;
};

class Tabber extends HTMLElement {
  connectedCallback() {
    this.createShadowRoot();
    const navLinksString = this.getAttribute("navLinks");
    this.navLinks = JSON.parse(navLinksString);
    console.log(this.navLinks);
    this.render();
  }

  addStyle() {
    const styleTag = document.createElement("style");
    styleTag.textContent = getStyle(this.size);
    this.shadowRoot.appendChild(styleTag);
  }

  render() {
    const span = document.createElement("span");
    span.classList.add("tabs-back");
    const clicker = href => () => window.location.href = href;
    this.navLinks.forEach(link => {
      const button = document.createElement("button");
      button.classList.add("tabs");
      button.classList.add("mat-button");
      if (link.current){
          button.classList.add("current");
      }
      button.innerHTML = link.label;
      const listener = clicker(link.path);
      button.addEventListener("click", listener);
      span.appendChild(button);
    });
    this.shadowRoot.appendChild(span);
    this.addStyle();
  }
}

try {
  customElements.define("tab-link", Tabber);
} catch (err) {
  console.error(err);
  const h3 = document.createElement("h3");
  h3.innerHTML =
    "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!";
  document.body.appendChild(h3);
}
