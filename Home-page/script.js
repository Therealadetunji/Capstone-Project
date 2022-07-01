const data = [
  {
    featuredimage: './images/rzfvhmeq6flztj3zddfh.jpg',
    role: 'Host',
    currentrole: 'Current Crystal Palalce Manager',
    name: 'Patrict Viera',
  },

  {
    featuredimage: './images/jurgen-klopp-liverpool-25-may-2022-manager.jpg',
    role: 'Guest Speaker',
    currentrole: 'Current Liverpool Manager',
    name: 'Jurgen Klopp',
  },

  {
    featuredimage: './images/Arsene-Wenger-02-scaled-e1592114277435.jpg',
    role: 'Speaker',
    name: 'Arsene Wenger',
  },

  {
    featuredimage: './images/michel-platini_3485945b.jpg',
    role: 'UEFA President',
    name: 'Mitchel Platini',
  },
];

const projectselection = document.querySelector('.featured-speakers');
data.forEach((element) => {
  console.log('element');
  const allCard = `<div class="featured-image">
  <div class="host">
     <div><img src="${element.featuredimage}" alt="Viera Picture"></div>
     <div class="details">${element.role}<br>${element.currentrole}</br><br class="name">${element.name}</br></div>
  </div>
</div>
`;

  projectselection.innerHTML += allCard;
});
