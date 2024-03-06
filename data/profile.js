const profileData = {
  title: "Resume",
  name: "John Doe",
  sub_title: "Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `Interested in creative arts.`,
    contact: {
      email: "blah@gmail.com",
      phone: "12344234",
      address: "College Station",
    },
  },
  links: [{ title: "Github", src: "https://github.com/" }],
  education: [
    {
      alma: "TAMU",
      duration: "2023-",
      std: "BS CS",
      score: "90%",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      topics: ["TypeScript", "JavaScript"],
    },
    {
      category: "Frameworks / Libraries",
      topics: [
        "ReactJS",
        "Redux",
        "NodeJS",
        "Express",
        "NextJS",
        "Angular",
        "Bootstrap",
        "AntDesign",
      ],
    },
  ],
  projects: [
    {
      title: "Restaurant Review",
      duration: "June - Nov 2018",
      link: "https://github.com/imvpn22/restaurant-review-pwa",
      desc: `A web app to list, view and add reviews of restaurants.
      The app includes filtering based on location, cuisine, and rating.
      This project was a part of Udacity's <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness,
      offline support, and improved accessibility.`,
    },
    {
      title: "WhiteBoard",
      duration: "Jun - Aug 2017",
      link: "https://github.com/imvpn22/whiteboard",
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>.
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS),
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`,
    },
  ],
  experiences: [
    {
      organization: "Google",
      title: `SDE`,
      date: "Jun 2021 - Present",
      details: [`Part of the <strong>Cloud team</strong>.`],
    },
  ],
  certifications: [
    {
      desc: `<strong>Nanodegree</strong> by <strong>Udacity</strong>.
      (<a target='_blank' rel='noreferrer' href='https://google.com'>google.com</a>)`,
      date: "May - Nov 2018",
    },
  ],
  busn: [
    {
      desc: `<strong>Nanodegree</strong> by <strong>Udacity</strong>.
      (<a target='_blank' rel='noreferrer' href='https://google.com'>google.com</a>)`,
      date: "May - Nov 2018",
    },
  ],
  events: [],
};
