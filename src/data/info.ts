export const info = {
  baseUrl: "https://aidenkwong.vercel.app",
  name: "Aiden Kwong",
  highLights: "Software Engineer | TypeScript | Fullstack",
  tagline: "I build software to solve real-world problems.",

  about: [
    `I'm a software engineer based in Toronto, Canada.
  I'm passionate about building software that leverages the latest technologies to solve real-world problems.
  My expertise lies in building web applications using React and Node.js and my language of choice is TypeScript.
  I'm a lifelong learner and I'm always looking for opportunities to improve my skills and learn new technologies.
  `
  ],
  technical: {
    languages: ["TypeScript", "JavaScript", "Python", "Java"],
    technologies: ["React", "Vue", "Node.js", "Express", "Docker", "AWS"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "ElasticSearch"]
  },

  experience: [
    {
      name: "Software Engineer",
      company: "Aigniter Holdings",
      companyUrl: "https://www.aigniter.com/",
      location: "Hong Kong",
      startDate: "May 2022",
      endDate: "Dec 2022",
      description: [
        "- Worked with 3 and 5 software engineers in two teams for SDLC of e-commerce and logistics products, and communicated with the product manager and operation team for their needs via Atlassian products (Jira and Confluence), serving thousands of users and companies",
        "- Created a mobile app with Flutter, dashboard web pages with Vue, and servers with Node.js for both products, with GitLab as our DevOps tool and AWS as our deployment platform to maintain robust and secured hosting and deployment for service reliability",
        "- Implemented REST and API Gateway services integrated with Swagger and authentication using an SOA server-side framework called Nestjs, notifications with Firebase Cloud Messaging, and a full-text search function with ElasticSearch which decreased navigation time by about 30 seconds",
        "- In addition to building features and maintenance, also built CI/CD pipelines, Docker, and deploy through ECS for teams to facilitate development workflow and consistency by reducing repetitive tasks which consume a couple of minutes each time"
      ]
    },
    {
      name: "Data Visualization Developer (internship)",
      company: "Chartipedia",
      companyUrl: "https://studio.chartipedia.com/",
      location: "Hong Kong",
      startDate: "Jan 2022",
      endDate: "Mar 2022",
      description: [
        "- Created scrollytelling websites showcasing interactive data visualization charts and UI for the general public, with the leverage of d3.js, and other related frameworks and libraries which attracted thousands to follow us on social media"
      ]
    }
  ],

  education: [
    {
      name: "The Chinese University of Hong Kong",
      location: "Hong Kong",
      startDate: "2017",
      endDate: "2022",
      description: [
        "Bachelor of Engineering (Hons) in Mechanical and Automation Engineering"
      ]
    }
  ],

  socialMedia: {
    twitter: "https://twitter.com/aidenkwong5",
    github: "https://github.com/AidenKwong",
    email: "aidenkwong5@gmail.com",
    linkedin: "https://www.linkedin.com/in/aidenkwong/"
  },

  projects: [
    {
      title: "Dezktop",
      description: `A website that acts as a home page for browser`,
      isFeatured: true,
      thumbnail: "/assets/images/dezktop.png",
      githubUrl: "https://github.com/aidenkwong/Dezktop",
      liveUrl: "https://dezktop.vercel.app/"
    },
    {
      title: "Youtube Popular Videos Archiver",
      description: `A server archives global YouTube popular videos daily`,
      isFeatured: true,
      thumbnail: "/assets/images/ympv.png",
      githubUrl:
        "https://github.com/aidenkwong/Youtube-Popular-Video-API-Backend",
      liveUrl: "https://ympv.netlify.app/"
    },
    {
      title: "Awesome Go Package Rank",
      description: `A table of golang packages ranked by import number and GitHub stars`,
      isFeatured: true,
      thumbnail: "/assets/images/go-package-rank.png",
      githubUrl: "https://github.com/aidenkwong/go-package-rank",
      liveUrl: "https://aidenkwong.me/go-package-rank/"
    }
  ]
};
