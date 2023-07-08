export const MENU_MAP = [
  {
    label: "Courses",
    link: null,
    submenu: [
      {
        label: "View Immersive Learning",
        link: "courses/bootcamps/immersive",
        submenu: [
          {
            label: "Full Stack Web & Software Engineer Bootcamp",
            link: "courses/bootcamps/immersive",
          },
        ],
      },
      {
        label: "View On-Site Bootcamps",
        link: "courses/onsite",
        submenu: [
          {
            label: "Web Developer",
            link: "courses/onsite/capetown/onsite-fullstack-bootcamp",
          },
          {
            label: "Software Engineer",
            link: "courses/onsite/capetown/onsite-software-bootcamp",
          },
        ],
      },
      {
        label: "View Online Bootcamps",
        link: "courses/bootcamps",
        submenu: [
          {
            label: "Web Developer",
            link: "courses/bootcamps/web-development",
          },
          {
            label: "Software Engineer",
            link: "courses/bootcamps/software-engineering",
          },
          {
            label: "Data Science",
            link: "courses/bootcamps/data-science",
          },
        ],
      },
      {
        label: "Stellenbosch University",
        link: "courses/university/stellenbosch",
        submenu: [
          {
            label: "Web Developer",
            link: "courses/university/stellenbosch/sun-web-development",
          },
          {
            label: "Software Engineer",
            link: "courses/university/stellenbosch/sun-software-engineering",
          },
          {
            label: "Data Science",
            link: "courses/university/stellenbosch/sun-data-science",
          },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    link: "pricing",
    submenu: [],
  },
  {
    label: "Our method",
    link: "human-mentoring",
    submenu: [],
  },
  {
    label: "For employers",
    link: "corporate-services",
    submenu: [],
  },
  {
    label: "Contact us",
    link: "contact",
    submenu: [],
  },
];

export const COURSE_MAP = [
  {
    id: "bootcamps",
    label: "Online Coding Bootcamps",

    info: "We partner with leading universities to deliver coding bootcamps. Study online or on campus, around your schedule. Graduate in as little as 3 months.",
    online: true,
    courses: [
      {
        id: "immersive",
        label: "Certified Full Stack Web & Software Engineer Bootcamp",
        popular: true,
        info: "Learn to create complex and powerful software, apps, and websites in our most advanced Immersive bootcamp.",
        part_time: 12,
        full_time: 6,
      },
      {
        id: "software-engineering",
        label: "Software Engineer Bootcamp",
        info: "Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.",
        part_time: 6,
        full_time: 3,
      },
      {
        id: "data-science",
        label: "Data Scientist Bootcamp",
        info: "Learn to use classic machine learning models and popular data science tools to work with data to empower business, research, and technology.",
        part_time: 6,
        full_time: 3,
      },
      {
        id: "web-development",
        label: "Full Stack Web Developer Bootcamp",
        info: "Master frontend & backend web development to build database-driven web apps using the powerful MERN stack.",
        part_time: 6,
        full_time: 3,
      },
    ],
  },
  {
    id: "university",
    label: "University Bootcamps",
    info: "",
    online: true,
    courses: [
      {
        id: "sun-web-development",
        label:
          "Stellenbosch University Web Development Bootcamp in Partnership with HyperionDev",
        info: "Master frontend & backend web development to build database-driven web apps using the powerful MERN stack.",
        location: "stellenbosch",
        part_time: 6,
        full_time: 3,
      },
      {
        id: "sun-software-engineering",
        label:
          "Stellenbosch University Software Engineering Bootcamp in Partnership with HyperionDev",
        info: "Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.",
        location: "stellenbosch",
        part_time: 6,
        full_time: 3,
      },
      {
        id: "sun-data-science",
        label:
          "Stellenbosch University Data Science Bootcamp in Partnership with HyperionDev",
        info: "Learn to use classic machine learning models and popular data science tools to work with data to empower business, research, and technology.",
        location: "stellenbosch",
        part_time: 6,
        full_time: 3,
      },
    ],
  },
  {
    id: "onsite",
    label: "On-site Coding Courses",
    info: "We partner with leading universities to deliver coding bootcamps. Study online or on campus, around your schedule. Graduate in as little as 3 months.",
    online: false,
    courses: [
      {
        id: "onsite-fullstack-bootcamp",
        label: "Cape Town Full Stack Web Developer Bootcamp",
        info: "Master frontend & backend web development to build database-driven web apps using the powerful MERN stack.",
        part_time: null,
        full_time: 3,
        location: "Cape Town",
      },
      {
        id: "onsite-software-bootcamp",
        label: "Cape Town Software Engineer Bootcamp",
        info: "Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.",
        part_time: null,
        full_time: 3,
        location: "Cape Town",
      },
    ],
  },
];
