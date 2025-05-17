export interface BlogPost {
  title: string;
  url: string;
  date: string;
}

export interface Tool {
  name: string;
  description: string;
  url: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const latestBlogs: BlogPost[] = [
  {
    title: "10 Best MyFitnessPal Alternatives for 2024",
    url: "/blog/best-myfitnesspal-alternatives-2024",
    date: "2024-03-15"
  }
];

export const tools: Tool[] = [
  {
    name: "TDEE Calculator",
    description: "Calculate your total daily energy expenditure",
    url: "https://calculatetdee.net/"
  }
];

export const socials: Social[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/ralpholazo",
    icon: "twitter"
  },
  {
    name: "GitHub",
    url: "https://github.com/ralpholazo24",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ralpholazo",
    icon: "linkedin"
  }
]; 