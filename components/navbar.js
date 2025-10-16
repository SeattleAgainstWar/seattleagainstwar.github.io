import { html } from './shared.js';

class SAWHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const page = this.getAttribute("page");

    const links = html`
      <ul>
        <li><a class="contrast" href="/">Home</a></li>
        <li><a class="contrast" href="/">About Us</a></li>
        <li><a class="contrast" href="/">Our Campaign</a></li>
        <li><a class="contrast" href="/blog">Blog</a></li>
        <li><a class="contrast" href="/">Newsletter</a></li>
      </ul>
    `;
    const content = html`
      <header hx-boost="true">
        ${page==="home" ?
          `<img id="main-logo" src="/resources/SAWcolor_fancy.png" alt="Seattle Against War">` :
          `<img id="minimal-logo" src="/resources/sawblade_filled_0.png" alt="Saw Logo"><h1>Seattle Against War</h1>`
        }
        <nav id="desktop-menu">${ links }</nav>

        <button
          id="mobile-menu-btn-show"
          popovertarget="mobile-menu"
          popovertargetaction="show"
          aria-label="Show Site Menu"
          aria-controls="mobile-menu"
        ></button>
        <nav id="mobile-menu" popover>
          <button
            id="mobile-menu-btn-close"
            popovertarget="mobile-menu"
            popovertargetaction="hide"
            aria-label="Close Site Menu"
            aria-controls="mobile-menu"
          ></button>
          ${ links }
        </nav>
      </header>
    `;
    this.outerHTML = content;
  }
}

customElements.define("saw-header", SAWHeader);
