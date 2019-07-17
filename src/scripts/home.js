import { cpus } from "os";

const datas = {
  articles: []
};

for(let i = 1; i < 100; i += 1) {
  datas.articles.push({
    title: `Title ${i}`,
    description: `Description of article ${i}`,
    image: '/public/2.jpg',
    content: `
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo libero dolorum voluptatum corrupti? Eius, vitae? Fugiat nobis repellat necessitatibus ut exercitationem expedita neque et nesciunt? Ratione doloribus quibusdam deleniti?</p>
      <p>Provident error obcaecati numquam ipsam magni ad excepturi reiciendis adipisci quasi iste quibusdam, maxime quidem eveniet repellat quam sequi et? Tenetur et ea, recusandae amet perspiciatis odio perferendis ipsam voluptatibus!</p>
      <p>Nihil, error sapiente quas velit earum quis ducimus vitae eligendi. Iusto esse suscipit, nesciunt sunt blanditiis in iure praesentium porro optio similique pariatur eum excepturi, ut eos, molestiae recusandae labore?</p>
      <p>Rem repellendus, tempora voluptatibus debitis laborum assumenda error repellat illum eius sit inventore libero labore nemo ad obcaecati nostrum laudantium odio id quia doloribus explicabo, recusandae accusamus. Magnam, dolores et.</p>
      <p>Alias iure odit natus, voluptatibus excepturi necessitatibus nobis minus exercitationem. Voluptatibus nemo voluptatum quia iusto minus qui distinctio itaque quibusdam nostrum corporis quasi soluta rerum delectus, necessitatibus sint! Odio, sit.</p>
    `,
    link: `/articles/${i}`,
  })
}

const getArticleCard = (data) => `
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3">
    <div class="mdc-card">
      <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
        <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url('${data.image}');"></div>
        <div class="demo-card__primary">
          <h2 class="demo-card__title mdc-typography mdc-typography--headline6">${data.title}</h2>
        </div>
        <div class="demo-card__secondary mdc-typography mdc-typography--body2">${data.description}</div>
      </div>
      <div class="mdc-card__actions">
        <div class="mdc-card__action-buttons">
          <a href="${data.link}" class="mdc-button mdc-card__action mdc-card__action--button">
            <span class="mdc-button__label">Read</span>
          </a>
        </div>
        <div class="mdc-card__action-icons">
          <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
          <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Bookmark">bookmark</button>
        </div>
      </div>
    </div>
  </div>
`

export default () => {
  const cards = datas.articles.map(getArticleCard).join('');
  const html = `
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        ${cards}
      </div>
    </div>
    `

  document.getElementById('main-list').innerHTML = html;
};
