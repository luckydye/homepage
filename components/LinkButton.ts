import { css, html, LitElement } from "lit";

export default class LinkButton extends LitElement {
  static get properties() {
    return {
      href: { type: String },
      target: { type: String, default: "_self" },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        color: black;
        --padding: 4px 10px;
        --background: var(--accent-color, #eee);
        --background-hover: var(--accent-color-hover, #eee);
        --background-active: var(--accent-color-active, #eee);
        --border-radius: 4px;
        margin-top: 15px;
        font-size: 14px;
        font-weight: 600;
      }
      .open-link[href] {
        transition: background 0.15s ease-out, box-shadow 0.15s ease-out;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        line-height: 100%;
        justify-self: flex-start;
        padding: var(--padding, 4px 10px);
        background: var(--background);
        color: inherit;
        border-radius: var(--border-radius);
        text-decoration: none;
      }
      :host(:hover) .open-link[href] {
        background: var(--background-hover);
        box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
      }
      :host(:active) .open-link[href] {
        background: var(--background-active);
        color: white;
        transition: none;
      }
      .material-icons {
        margin: 0 5px;
        display: var(--display-icon, "inherit");
      }
    `;
  }

  render() {
    return html`
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
        type="text/css"
      />
      <a target="_blank" rel="noreferrer" class="open-link" href="${this.href}">
        <slot></slot> <span class="material-icons">arrow_right_alt</span>
      </a>
    `;
  }
}

customElements.define("link-button", LinkButton);
