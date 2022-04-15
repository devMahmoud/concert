const artistGrid = document.querySelector('.artist-cards-container');

const artists = [
    {
        name:'Ali Elhagar',
        job: 'Singer',
        about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
        photo: 'img/artists/ali.png',
    },
    {
        name:'Kilnam Chon',
        job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum quia fugiat',
        about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
        photo: 'img/artist_02.png',
    },
    {
        name:'Sohyeong Noh',
        job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum quia fugiat',
        about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
        photo: 'img/artist_03.png',
    },
    {
        name:'Julia Reda',
        job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum quia fugiat',
        about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
        photo: 'img/artist_04.png',
    },
    {
        name:'Lila Tretikov',
        job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum quia fugiat',
        about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
        photo: 'img/artist_05.png',
    },
    {
        name:'Ryan Merkley',
        job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum quia fugiat',
        about: 'fugit perspiciatis molestias assumenda? Mollitia fuga modi consectetur dolorem cumque quia error reiciendis blanditiis amet, repellendus temporibus accusamus.',
        photo: 'img/artist_06.png',
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
}

for (let i = 0; i < artists.length; i += 1){
    creatArtistCard(artists[i].name, artists[i].job, artists[i].about, artists[i].photo)
}