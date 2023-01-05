const authors = [
  {
    name: 'Brhanu Gudisa',
    github: 'https://github.com/GutemaG',
    twitter: 'https://twitter.com/birhanugudisa3',
    linkedin: 'https://linkedin.com/in/birhanugudisa',
  },
  {
    name: 'Abdul Ahad',
    github: 'https://github.com/ahadb802',
    twitter: 'https://twitter.com/twitterhandle',
    linkedin: 'https://linkedin.com/in/linkedinhandle',
  },
];

const contactUs = () => {
  const aboutUsContainer = document.querySelector('.contact-us');
  aboutUsContainer.innerHTML = `
    <h1>About us</h1>
      <ul class="authors">
      </ul>
  `;
  const authorsContainer = aboutUsContainer.querySelector('.authors');
  authors.forEach((author) => {
    const auth = document.createElement('li');
    auth.innerHTML = `
        <span>
          👤 ${author.name} <br>
        </span>
        <a href="${author.github}" target="_blank">GitHub</a>
        <a href="${author.twitter}" target="_blank">Twitter</a>
        <a href="${author.linkedin}" target="_blank">Linked</a>`;
    authorsContainer.appendChild(auth);
  });
};
export default contactUs;
