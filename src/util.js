const navbarData = [
  {
    title: "Home",
    link: "/",
    icon: "home",
  },
  {
    title: "Services",
    link: "/services",
    icon: "cogs",
    subItems: [
      { title: "Consulting", link: "/services/consulting" },
      { title: "Implementation", link: "/services/implementation" },
      { title: "Support", link: "/services/support" },
    ],
  },
  {
    title: "Projects",
    link: "/projects",
    icon: "project-diagram",
    subItems: [
      { title: "Ongoing", link: "/projects/ongoing" },
      { title: "Completed", link: "/projects/completed" },
    ],
  },
  {
    title: "About Us",
    link: "/about",
    icon: "info-circle",
  },
  {
    title: "Contact",
    link: "/contact",
    icon: "envelope",
  },
];

export { navbarData };
