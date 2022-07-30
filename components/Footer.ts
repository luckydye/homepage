import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lucky-footer")
export class Footer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        min-height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px 0 60px 0;
        box-sizing: border-box;
      }

      a {
        color: inherit;
      }
    `;
  }

  render() {
    return html`
      <a
        title="made by luckydye :)"
        href="https://twitter.com/timh4v"
        target="_blank"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
          x="0px"
          y="0px"
          width="32px"
          viewBox="0 0 38.3 76.6"
          style="enable-background:new 0 0 38.3 76.6;"
          xml:space="preserve"
        >
          <style type="text/css">
            .st0 {
              fill: currentColor;
            }
          </style>
          <defs></defs>
          <g>
            <polygon
              id="c12f0b6d-d8db-47df-9b83-7d0ad379aa2d_2_"
              class="st0"
              points="24,19.1 38.3,27.4 38.3,68.3 24,76.6 	"
            />
            <polygon class="st0" points="0,49.1 14.4,57.4 14.4,0 0,8.3 	" />
          </g>
        </svg>
      </a>
    `;
  }
}
