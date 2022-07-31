import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

const callback = (entries, observer) => {
  let i = 0;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.show();
      }, i * 100);
      i++;
    }
  });
};

const observer = new IntersectionObserver(callback, {
  rootMargin: "-100px",
});

@customElement("lucky-tile")
export class Tile extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        transform-origin: 50% 20px;
        opacity: 0;
        overflow: hidden;
        border-radius: 6px;
        transition: opacity 0.5s ease 0s,
          box-shadow 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s,
          transform 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s;
        transform: translate(0, 60px);
      }
      :host([shown]) {
        opacity: 1;
        transform: rotate(var(--rot, 0deg)) translate(0, 0px);
      }
    `;
  }

  show() {
    this.setAttribute("shown", "");
  }

  connectedCallback() {
    super.connectedCallback();

    this.style.setProperty("--rot", `${(Math.random() - 0.5) * 2}deg`);

    observer.observe(this);
  }

  render() {
    return html`<slot></slot>`;
  }
}
