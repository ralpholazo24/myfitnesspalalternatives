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

export interface Directory {
  name: string;
  description: string;
  url: string;
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
    description: "",
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

export const directories: Directory[] = [
  {
    name: "Strava Alternatives",
    description: "",
    url: "https://stravaalternatives.com"
  },
  {
    name: "Calorie Deficit Recipes",
    description: "",
    url: "https://caloriedeficitrecipes.com"
  }
]; 