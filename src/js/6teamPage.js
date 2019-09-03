const myTeam = document.querySelector('.myTeam');

const OUR_TEAM = [
  {
    name: 'Nikolay Mykhailenko',
    gitHubLink: 'https://github.com/HardRye',
    facebookLink: false,
  },
  {
    name: 'Anna Kholod',
    gitHubLink: 'https://github.com/annakholod',
    facebookLink: false,
  },
  {
    name: 'Kostya Shmotoloha',
    gitHubLink: 'https://github.com/kostyash23',
    facebookLink: false,
  },
  {
    name: 'Alexandr Kozyr',
    gitHubLink: 'https://github.com/AlexxxxK',
    facebookLink: false,
  },
  {
    name: 'Maksym Osadchuk',
    gitHubLink: 'https://github.com/maximusII',
    facebookLink: false,
  },
]

function footLinkHandle() {
  activeTeamPage();

  const fragment = document.createDocumentFragment();

  // console.log(myTeam);
  const teamWrapper = document.createElement('ul')
  teamWrapper.classList.add('new__class', 'contacts');
  // const contacts = document.createElement('div');
  // contacts.classList.add('contacts');

  OUR_TEAM.forEach(member => {
    const personWrapper = document.createElement('li');
    personWrapper.classList.add('contacts__info');

    const personName = document.createElement('p');
    personName.textContent = member.name;

    const personSocials = document.createElement('div');
    personSocials.classList.add('person__socials');

    const gitHubLink = document.createElement('a');
    gitHubLink.setAttribute('href', member.gitHubLink);
    gitHubLink.setAttribute('target', '_blank');
    gitHubLink.textContent = member.gitHubLink;

    const fbLink = document.createElement('a');
    fbLink.setAttribute('href', member.facebookLink);
    fbLink.textContent = member.facebookLink;

    personSocials.append(gitHubLink, fbLink);
    personWrapper.append(personName, personSocials);

    fragment.append(personWrapper);
  })

  teamWrapper.append(fragment);


  myTeam.innerHTML = '';
  myTeam.appendChild(teamWrapper);
}

// footLink.addEventListener('click', footLinkHandle);