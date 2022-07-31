import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import projects from "../queries/Projects.gql?raw";
import { Lightbox } from "./Lightbox";

type Project = {
  id: string;
  title: string;
  description: string;
  editorialDate: string;
  preview: {
    url: string;
  };
  url: string;
};

const contentUrl =
  "https://api-eu-central-1.graphcms.com/v2/ckpyd6ueoo00f01z0eo4rgn07/master";

export function fetchApi(graphQuery) {
  return fetch(contentUrl, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjM4NzMyMjIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrcHlkNnVlb28wMGYwMXowZW80cmduMDcvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOGZhMmRhYjYtZWQ3Yi00Y2UyLTk4NTYtNGIwMDkxYWRlMjEyIiwianRpIjoiY2twenc2dHhpZ2ZiMDAxeXpiaWg0Z3UwZCJ9.V4MEFWNKBdAanX0IAVv0MxfiiCvuSiObUn55PkLoWoInXIUBeUhx-tabm-5uC4vgEuUhG_Htmw7-cqYFFUafud2f__98cUICglb0ATbzNpkIs6bsKeOOwm_bWEuja8BRGfpUItnKmALcHDV65s2Z2I_4Bv7uRCJnQJsD92XWxuKV0hnCtFy168TLRcywc_M6RthWC1-OMVZ0LqNZvx2QVx-Grd1UX4ewgrBKz0OJNHJJCqKh47xutTPvN6AJ0ZyFPb3vzwO_jTm4GxnuE0EayMYVjTCaFRpt6RC6QjE8xntxMwWbsIZnWzQJ9-rjZYDtODKl-MufVp-Wu83ZDc75IY1IY_8dGercjgV6JH7jH-MBjKUtypK-m02C9Eyn5qBLtx57V5Iunj8EH98RQwHgCTHCVtN5MBSLA0C4hbgAq_OLe5k7Fmi7ciA3ORYjF-IKx6vD9zWyPoQ374zZFI8Bngm6Jxgt7PZF6FOmOpie7RRylhn11yT_HfAvxHQtQuQvZ9U38b-PERtmKl_5PIGpjXlgLBKAvllCduy9HECDQAqV90oZc8QPyX8th6exCgh7ZMdrXY2RIUsU7P1O-QVL8tdYpt9t094YOYPAVD_Wg_7_5Opyl5w1uu_IZTtxhWdyJYLDMt7b4mi5jL3o0S5mskUcdYp3JwK2e8NvGuwc-Tk",
    },
    body: JSON.stringify({
      query: graphQuery,
      variables: null,
    }),
  })
    .then(async (res) => res.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.error(err);
    });
}

function showBigImage(e) {
  e.preventDefault();
  const show = new Lightbox(e.target);
  document.body.append(show);
}

@customElement("lucky-grid")
export class Grid extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;

        --columnCount: 4;
      }

      aui-lazyimage {
        display: block;
        width: 100%;
        height: 100%;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(var(--columnCount), 1fr);
        gap: 10px;
      }

      lucky-tile {
        height: 250px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        overflow: hidden;
        flex-flow: column;
      }

      link-button {
        position: absolute;
        transform: translateY(50px);
        transition: transform 0.3s 0.05s ease;
        margin: 5px 15px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      h3 {
        font-size: 32px;
        margin: 5px 15px;
        font-weight: normal;
        max-width: 75%;
        transition: transform 0.3s ease;
      }

      lucky-tile:hover > link-button {
        transform: translateY(-20px);
      }

      lucky-tile:hover > h3 {
        transform: translateY(-70px);
      }

      h2 {
        font-size: 56px;
        margin: 15px;
        font-weight: normal;
      }

      .spacer {
      }

      .year {
        background: rgb(163 163 163);
        color: white;
        pointer-events: none;
        user-select: none;
      }

      .link {
        display: contents;
        color: inherit;
      }
    `;
  }

  projects: Project[] = [];

  connectedCallback(): void {
    super.connectedCallback();

    fetchApi(projects).then((data) => {
      this.projects = data.projects;
      this.requestUpdate();
    });

    const updateSize = () => {
      if (window.innerWidth < 700) {
        this.columnCount = 2;
        this.style.setProperty("--columnCount", this.columnCount.toString());
        this.requestUpdate();
      } else if (window.innerWidth < 1200) {
        this.columnCount = 3;
        this.style.setProperty("--columnCount", this.columnCount.toString());
        this.requestUpdate();
      } else {
        this.columnCount = 5;
        this.style.setProperty("--columnCount", this.columnCount.toString());
        this.requestUpdate();
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();
  }

  columnCount = 4;

  render() {
    let lastDate: Date | null = null;
    let column = 0;
    let lastYear: number | null = null;

    const maxSpacerCount = 2;
    const columnCount = this.columnCount;

    return html`
      <div class="grid">
        ${repeat(
          this.projects.sort((a, b) => {
            return new Date(b.editorialDate) - new Date(a.editorialDate);
          }),
          (project) => project.id,
          (project: Project) => {
            let sapcerCount = 0;
            if (lastDate) {
              const dateDiff = Math.abs(
                (new Date(project.editorialDate) - new Date(lastDate)) /
                  (1000 * 60 * 60 * 24 * 31)
              );
              sapcerCount = Math.round(Math.min(dateDiff, maxSpacerCount));
            }
            lastDate = new Date(project.editorialDate);

            const year = lastDate.getFullYear();

            let renderYear = false;

            if (year !== lastYear) {
              lastYear = lastDate.getFullYear();

              if (year !== new Date().getFullYear()) {
                renderYear = true;
              }
            }

            function countColumns(c = 1) {
              return ((column + c) % columnCount) + 1;
            }

            // handle overflow
            if (countColumns(sapcerCount) + 1 > columnCount) {
              sapcerCount++;
            }

            function nextColumn() {
              const lastCol = column;
              column = (column + 1) % columnCount;
              return lastCol + 1;
            }

            const template = html`
              ${new Array(sapcerCount)
                .fill(1)
                .map(
                  () => html`<div
                    class="spacer"
                    column="${nextColumn()}"
                  ></div>`
                )}
              ${column > columnCount - 3
                ? html`
                    <a href="${project.url}" target="_blank" class="link">
                      <lucky-tile
                        column="${nextColumn()}"
                        style="align-items: flex-end; text-align: right;"
                      >
                        <h3>${project.title}</h3>
                        <link-button href="${project.url}"
                          >Open Project</link-button
                        >
                      </lucky-tile>
                      <lucky-tile column="${nextColumn()}">
                        <aui-lazyimage src="${project.preview.url}" />
                      </lucky-tile>
                    </a>
                  `
                : html`
                    <a href="${project.url}" target="_blank" class="link">
                      <lucky-tile column="${nextColumn()}">
                        <aui-lazyimage src="${project.preview.url}" />
                      </lucky-tile>
                      <lucky-tile column="${nextColumn()}">
                        <h3>${project.title}</h3>
                        <link-button href="${project.url}"
                          >Open Project</link-button
                        >
                      </lucky-tile>
                    </a>
                  `}
              ${renderYear
                ? html`
                    <lucky-tile class="year" column="${nextColumn()}">
                      <h2>${year}</h2>
                    </lucky-tile>
                  `
                : html``}
            `;
            return template;
          }
        )}
      </div>
    `;
  }
}
