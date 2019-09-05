const myTeam = document.querySelector('.myTeam');

const OUR_TEAM = [
  {
    name: 'Nikolay Mykhailenko',
    gitHubLink: 'https://github.com/HardRye',
    facebookLink: false,
    linkedInLink: false,
  },
  {
    name: 'Anna Kholod',
    gitHubLink: 'https://github.com/annakholod',
    facebookLink: false,
    linkedInLink: false,
  },
  {
    name: 'Kostya Shmotoloha',
    gitHubLink: 'https://github.com/kostyash23',
    facebookLink: false,
    linkedInLink: false,
  },
  {
    name: 'Alexandr Kozyr',
    gitHubLink: 'https://github.com/AlexxxxK',
    facebookLink: false,
    linkedInLink: false,
  },
  {
    name: 'Maksym Osadchuk',
    gitHubLink: 'https://github.com/maximusII',
    facebookLink: false,
    linkedInLink: false,
  },
]

function footLinkHandle() {
  activeTeamPage();

  const fragment = document.createDocumentFragment();

  const teamWrapper = document.createElement('ul')
  teamWrapper.classList.add('new__class', 'contacts');

  OUR_TEAM.forEach(member => {
    const personWrapper = document.createElement('li');
    personWrapper.classList.add('person');

    const personName = document.createElement('p');
    personName.classList.add('person__name');
    personName.textContent = member.name;

    const personSocials = document.createElement('div');
    personSocials.classList.add('person__socials');

    const gitHubLink = document.createElement('a');
    gitHubLink.classList.add('person__socials-icon', 'person__socials-icon--github')
    gitHubLink.setAttribute('href', member.gitHubLink);
    gitHubLink.setAttribute('target', '_blank');

    const fbLink = document.createElement('a');
    fbLink.classList.add('person__socials-icon', 'person__socials-icon--facebook')
    fbLink.setAttribute('href', member.facebookLink);
    fbLink.setAttribute('target', '_blank');

    const linkedInLink = document.createElement('a');
    linkedInLink.classList.add('person__socials-icon', 'person__socials-icon--linkedin')
    linkedInLink.setAttribute('href', member.linkedInLink);
    linkedInLink.setAttribute('target', '_blank');

    personSocials.append(gitHubLink, fbLink, linkedInLink);
    personWrapper.append(personName, personSocials);

    fragment.append(personWrapper);
  })

  teamWrapper.append(fragment);


  myTeam.innerHTML = '';
  myTeam.appendChild(teamWrapper);
}

// footLink.addEventListener('click', footLinkHandle);