import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lucky-header")
export class Header extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto 1fr auto;
        padding: 50px 0px 60px 0px;
        position: relative;
        grid-gap: 12px 0;
        transform: translateY(calc(var(--scrollY) * 0.33));
        z-index: 100;
      }

      @media screen and (max-width: 700px) {
        :host {
          padding: 50px 0 10px 0;
        }
      }

      a {
        color: currentColor;
      }

      .breadcrumb {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-weight: normal;
        font-size: 14px;
        justify-self: flex-start;
        grid-row: 2;
        grid-column: 1;
      }

      .breadcrumb .prefix {
        margin-right: 5px;
      }

      .breadcrumb svg {
        fill: currentColor;
      }

      .logo {
        display: flex;
        align-items: center;
        grid-row: 1;
        grid-column: 1;
      }

      .logo svg {
        fill: currentColor;
      }

      .meta {
        justify-self: flex-start;
        grid-column: 1;
      }

      .header-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        pointer-events: none;
        display: none;
      }

      .header-background svg {
        position: relative;
        top: -174px;
        left: -620px;
      }

      .meta {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 10000;
        height: 50px;
        margin-right: 115px;
      }

      .meta-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .meta-nav a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        font-size: 14px;
        font-weight: 600;
        font-family: "Roboto", sans-serif;
        margin-right: 30px;
      }

      .meta-nav svg {
        fill: currentColor;
        height: 18px;
        transition: fill 0.1s ease-out;
      }
      .meta-nav a:hover svg {
        fill: #eee;
      }
      .meta-nav a:hover::after {
        color: #eee;
      }

      .meta-nav a::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        padding: 8px;
        background: currentColor;
        opacity: 0;
        border-radius: 4px;
        z-index: -1;
        transition: opacity 0.1s ease-out;
      }

      .meta-nav a:hover::before {
        opacity: 1;
      }

      .meta-nav svg:active {
        transform: scale(0.9);
      }
    `;
  }

  render() {
    return html`
      <div class="breadcrumb">
        <span class="prefix">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="9"
            viewBox="0 0 8 9"
          >
            <path
              id="Polygon_2"
              data-name="Polygon 2"
              d="M3.628,1.549a1,1,0,0,1,1.743,0l2.79,4.96A1,1,0,0,1,7.29,8H1.71A1,1,0,0,1,.838,6.51Z"
              transform="translate(8) rotate(90)"
            />
          </svg>
        </span>
        <span>Projects</span>
      </div>
      <a href="/" title="go to home" class="logo">
        <svg
          height="50px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218.8 48.1"
        >
          <g>
            <path class="st0" d="M7.1,40.7h11.8v6.7H0V0.7h7.1V40.7z" />
            <path
              class="st0"
              d="M46.4,36.9c0,3.6-1,6.4-2.9,8.3c-1.9,1.9-4.6,2.9-8.1,2.9c-3.4,0-6-1-8-2.9c-1.9-1.9-2.9-4.7-2.9-8.3V0.7h6.8
                          v36c0,3.1,1.3,4.7,4,4.7s4-1.6,4-4.7v-36h7.1V36.9z"
            />
            <path
              class="st0"
              d="M72.2,3c1.9,2,2.9,4.7,2.9,8.2v4.2l-6.8,0.3v-3.8c0-3.6-1.3-5.4-4-5.4c-1.3,0-2.3,0.4-3,1.2
                          c-0.7,0.8-1,2-1,3.5v25.5c0,1.6,0.3,2.7,1,3.5c0.7,0.8,1.7,1.2,3,1.2c2.7,0,4-1.8,4-5.4v-5.2l6.8,0.3v5.6c0,3.5-1,6.3-2.9,8.2
                          c-1.9,2-4.6,3-8.1,3c-3.4,0-6.1-1-8-2.9c-1.9-2-2.9-4.7-2.9-8.3V11.2c0-3.6,1-6.3,2.9-8.3C58,1,60.7,0,64.1,0C67.6,0,70.3,1,72.2,3
                          z"
            />
            <path
              class="st0"
              d="M96.6,19.2l9.8,28.2h-7.5L91.9,27l-3.1,6v14.4h-7.1V0.7h7.1v19.5h0.1l9.8-19.5h7.4L96.6,19.2z"
            />
            <path
              class="st0"
              d="M126.8,26.3v21.1h-7.1V26.2l-9.8-25.6h7.5l5.9,16.6h0.1l5.7-16.6h7.3L126.8,26.3z"
            />
            <path
              class="st0"
              d="M160.7,3.7c2,2,3,5,3,8.8v23.1c0,3.8-1,6.8-3,8.8c-2,2-4.9,3-8.7,3h-10.1V0.7h10.1
                          C155.8,0.7,158.7,1.7,160.7,3.7z M148.9,7.2v33.6h2.8c1.7,0,2.9-0.5,3.7-1.4c0.8-0.9,1.2-2.4,1.2-4.3V12.9c0-2-0.4-3.4-1.2-4.3
                          c-0.8-0.9-2-1.4-3.7-1.4H148.9z"
            />
            <path
              class="st0"
              d="M184,26.3v21.1h-7.1V26.2l-9.8-25.6h7.5l5.9,16.6h0.1l5.7-16.6h7.3L184,26.3z"
            />
            <path
              class="st0"
              d="M218.8,7.2H206v13.2h10.3V27H206v13.9h12.8v6.5h-19.9V0.7h19.9V7.2z"
            />
          </g>
        </svg>
      </a>
      <div class="meta">
        <div class="meta-nav">
          <a
            href="https://www.instagram.com/luckydye/"
            target="blank"
            aria-label="Instagram"
          >
            <svg
              id="test1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18.41 18.406"
            >
              <path
                id="Pfad_1"
                data-name="Pfad 1"
                d="M9.2,1.658c2.458,0,2.747.011,3.718.055a5.022,5.022,0,0,1,1.709.318,2.856,2.856,0,0,1,1.059.687,2.811,2.811,0,0,1,.687,1.059,5.116,5.116,0,0,1,.318,1.709c.044.972.055,1.26.055,3.718s-.011,2.747-.055,3.718a5.022,5.022,0,0,1-.318,1.709,2.856,2.856,0,0,1-.687,1.059,2.811,2.811,0,0,1-1.059.687,5.116,5.116,0,0,1-1.709.318c-.972.044-1.26.055-3.718.055S6.454,16.74,5.483,16.7a5.022,5.022,0,0,1-1.709-.318,2.856,2.856,0,0,1-1.059-.687,2.811,2.811,0,0,1-.687-1.059,5.116,5.116,0,0,1-.318-1.709c-.044-.972-.055-1.26-.055-3.718s.011-2.747.055-3.718a5.022,5.022,0,0,1,.318-1.709,2.856,2.856,0,0,1,.687-1.059,2.811,2.811,0,0,1,1.059-.687,5.116,5.116,0,0,1,1.709-.318c.972-.047,1.264-.055,3.718-.055M9.2,0c-2.5,0-2.813.011-3.8.055A6.745,6.745,0,0,0,3.174.482,4.485,4.485,0,0,0,1.545,1.545,4.564,4.564,0,0,0,.482,3.174,6.749,6.749,0,0,0,.055,5.41C.011,6.389,0,6.7,0,9.2S.011,12.014.055,13a6.789,6.789,0,0,0,.427,2.235,4.485,4.485,0,0,0,1.063,1.629,4.564,4.564,0,0,0,1.629,1.063,6.749,6.749,0,0,0,2.235.427c.983.044,1.293.055,3.8.055s2.813-.011,3.8-.055a6.789,6.789,0,0,0,2.235-.427,4.485,4.485,0,0,0,1.629-1.063,4.564,4.564,0,0,0,1.063-1.629A6.749,6.749,0,0,0,18.355,13c.044-.983.055-1.293.055-3.8s-.011-2.813-.055-3.8a6.789,6.789,0,0,0-.427-2.235,4.485,4.485,0,0,0-1.063-1.629A4.564,4.564,0,0,0,15.236.479,6.749,6.749,0,0,0,13,.051C12.014.011,11.7,0,9.2,0Z"
                transform="translate(0 0)"
              />
              <path
                id="Pfad_2"
                data-name="Pfad 2"
                d="M127.227,122.6a4.727,4.727,0,1,0,4.727,4.727A4.727,4.727,0,0,0,127.227,122.6Zm0,7.791a3.068,3.068,0,1,1,3.068-3.068A3.068,3.068,0,0,1,127.227,130.391Z"
                transform="translate(-118.025 -118.122)"
              />
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="1.103"
                cy="1.103"
                r="1.103"
                transform="translate(13.011 3.185)"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/timh4v"
            target="blank"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.092 14.701">
              <path
                id="test1"
                d="M80.69,113.151A10.49,10.49,0,0,0,91.251,102.59c0-.161,0-.321-.011-.48a7.552,7.552,0,0,0,1.852-1.921,7.408,7.408,0,0,1-2.132.584,3.725,3.725,0,0,0,1.632-2.053,7.439,7.439,0,0,1-2.357.9,3.715,3.715,0,0,0-6.326,3.385,10.538,10.538,0,0,1-7.65-3.878,3.715,3.715,0,0,0,1.149,4.955,3.684,3.684,0,0,1-1.685-.465v.047A3.713,3.713,0,0,0,78.7,107.3a3.706,3.706,0,0,1-1.676.064,3.716,3.716,0,0,0,3.468,2.578,7.448,7.448,0,0,1-4.61,1.592,7.556,7.556,0,0,1-.884-.054,10.509,10.509,0,0,0,5.69,1.664"
                transform="translate(-75 -98.45)"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="header-background">
        <svg width="2393.048" height="375.356" viewBox="0 0 2393.048 375.356">
          <defs>
            <filter
              id="Path_9"
              x="0"
              y="0"
              width="2393.048"
              height="375.356"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="7.5" result="blur" />
              <feFlood floodOpacity="0.051" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_9)">
            <path
              id="Path_9-2"
              data-name="Path 9"
              d="M210.292,21.106S7.232,9.744-18.376,101.914s74.209,194.412,191.489,238.94S345.035,266.7,576.319,307.716s283.506-29.3,430.406-86.5,299.5-7.8,429.5,19.5,290.307,41.37,443,5.2c63.978-15.155,106-38.2,199-20.2s238.318-2.484,247.106-94.758-180.156-109.85-180.156-109.85Z"
              transform="translate(44.92 -1.16)"
              fill="#272727"
            />
          </g>
        </svg>
      </div>
    `;
  }
}
