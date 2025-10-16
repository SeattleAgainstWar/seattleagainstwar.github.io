import { html } from './shared.js';

class BlogCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const date = this.getAttribute("date");
    const href = this.getAttribute("href");

    const content = html`
      <article>
        <h2><a href="${href}">${title}</a></h2>
        <p><time datetime="${date}">${date}</time></p>
      </article>
    `;
    this.outerHTML = content;
  }
}

customElements.define("blog-card", BlogCard);
