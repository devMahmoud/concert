const artistGrid = document.querySelector('.artist-cards-container');

const artists = [
  {
    name: 'Ali Elhagar',
    job: 'Singer',
    about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
    photo: 'img/artists/ali.png',
  },
  {
    name: 'Wael Jassar',
    job: 'Singer',
    about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
    photo: 'img/artists/wael.png',
  },
  {
    name: 'Samira Said',
    job: 'Singer',
    about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
    photo: 'img/artists/samira.png',
  },
  {
    name: 'Marwan Khoury',
    job: 'Singer',
    about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
    photo: 'img/artists/marwan.png',
  },
  {
    name: 'Abadi Al Johar',
    job: 'Singer',
    about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
    photo: 'img/artists/abadi.png',
  },
  {
    name: 'Asala',
    job: 'Singer',
    about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
    photo: 'img/artists/asala.png',
  },
];

const creatArtistCard = (title, jobTitle, info, img) => {
  const artistCard = document.createElement('div');
  artistCard.classList.add('artist-card');
  artistCard.innerHTML = `<img class="artist-photo" src="${img}">
    <div class="artist-card-content">
        <h4 class="artist-name">${title}</h4>
        <p class="artist-job">${jobTitle}</p>
        <p class="artist-about">${info}</p>
    </div>`;

  artistGrid.appendChild(artistCard);
};

for (let i = 0; i < artists.length; i += 1) {
  creatArtistCard(artists[i].name, artists[i].job, artists[i].about, artists[i].photo);
}
