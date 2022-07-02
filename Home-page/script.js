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

const projectselection = document.querySelector('.container');
data.forEach((element) => {
  console.log('element');
  const allCard = `<div class="image">
  <img src="${element.featuredimage}" alt="Viera Picture">
  <div class="details">
    <p class="speaker-desc"><br>${element.currentrole}</br>${element.name}</p>
  </div>
</div>
`;

  projectselection.innerHTML += allCard;
});
