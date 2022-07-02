const data = [
  {
    featuredimage: './images/rzfvhmeq6flztj3zddfh.jpg',
    role: 'Host',
    currentrole: 'Current Crystal Palalce Manager',
    name: 'Patrict Viera',
    descriptiom: 'Former ex Arsenal player and new coach of the eagles',
  },

  {
    featuredimage: './images/jurgen-klopp-liverpool-25-may-2022-manager.jpg',
    role: 'Guest Speaker',
    currentrole: 'Current Liverpool Manager',
    name: 'Jurgen Klopp',
    descriptiom: 'Ex dortmund manager and liverpool boss',
  },

  {
    featuredimage: './images/Arsene-Wenger-02-scaled-e1592114277435.jpg',
    currentrole: 'Speaker',
    name: 'Arsene Wenger',
    descriptiom: 'Ex arsenal coach but retired now',
  },

  {
    featuredimage: './images/michel-platini_3485945b.jpg',
    currentrole: 'UEFA President',
    name: 'Mitchel Platini',
    descriptiom:
      'Cuurent UEFA President and former ballon Dor Winner three times',
  },
];

const projectselection = document.querySelector('.container');
data.forEach((element) => {
  console.log('element');
  const allCard = `<div class="image">
  <img src="${element.featuredimage}" alt="Viera Picture">
  <div class="details">
    <h3>${element.name}</h3>
    <br>
    <p class="speaker-desc">${element.currentrole}</p>
    <br>
    <p class="for-mobile">${element.descriptiom}</p>
  </div>
</div>
`;

  projectselection.innerHTML += allCard;
});
