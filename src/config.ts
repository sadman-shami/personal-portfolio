export interface Links {
  name: string;
  url: string;
  aka: string;
}

export interface NavLinks {
  name: string;
  url: string;
}

const NAME: string = "Sadman Shami";

const links: Links[] = [
  {
    name: "Github",
    url: "https://github.com/sadman-shami",
    aka: "sadman-shami",
  },
  {
    name: "Email",
    url: "mailto:srahyme413@gmail.com",
    aka: "@sadman-shami",
  },
];

const navLinks: NavLinks[] = [
  { name: "about", url: "/" },
  { name: "post", url: "/post" },
];

const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
];

const years: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export { NAME, links, navLinks, days, years };
