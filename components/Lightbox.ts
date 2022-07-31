import { css, html, LitElement, PropertyValueMap } from "lit";
import { query } from "lit/decorators.js";

export class Lightbox extends LitElement {
  static get properties() {
    return {
      src: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 100000000;
      }
      .blackbox {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        animation: fadein 0.25s ease;
      }
      .close-btn {
        position: absolute;
        top: 40px;
        right: 40px;
        border-radius: 50%;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .close-btn:hover {
        background: grey;
      }
      .close-btn:active {
        background: darkgrey;
      }
      .content {
        position: absolute;
        inset: 0px auto auto 0px;
        transition: all 0.5s ease 0s, width 0.6s ease 0s, height 0.6s ease 0s;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
      }
      .content img {
        height: 100%;
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;
  }

  constructor(img) {
    super();

    this.sourceImage = img;
    this.position = null;

    if (!this.src && img != null) {
      this.src = img.src;
      this.position = img.getClientRects()[0];
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  @query(".content")
  content: HTMLDivElement;

  @query("img")
  image: HTMLImageElement;

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    const content = this.content;

    content.style.width = this.position.width + "px";
    content.style.height = this.position.height + "px";
    content.style.transform = `translate(${
      this.position.x - this.position.width / 2
    }px, ${this.position.y - this.position.height / 2}px)`;

    this.image.onload = () => {
      this.sourceImage.style.opacity = 0;
      this.sourceImage.style.transition = "opacity .125s ease";

      content.style.width = "90vw";
      content.style.height = "90vh";

      content.style.transform = `translate(calc(50vw - 50%), calc(50vh - 50%))`;
    };

    this.image.src = this.src;
  }

  close() {
    this.remove();

    if (this.sourceImage) {
      this.sourceImage.style.opacity = null;
    }
  }

  render() {
    return html`
      <div
        class="blackbox"
        @click="${(e) => {
          if (e.target.className === "blackbox") {
            this.close();
          }
        }}"
      >
        <div class="close-btn" @click="${(e) => this.close()}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 30.258 30.258"
          >
            <g transform="translate(-447.371 -422.371)">
              <line
                x2="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
              <line
                x1="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>

        <div class="content">
          <img />
        </div>
      </div>
    `;
  }
}

customElements.define("lucky-lightbox", Lightbox);
