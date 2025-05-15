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
  },
  {
    title: "How to Choose the Right Fitness Tracking App",
    url: "/blog/choosing-fitness-tracking-app",
    date: "2024-03-10"
  },
  {
    title: "The Future of Health and Fitness Apps",
    url: "/blog/future-of-fitness-apps",
    date: "2024-03-05"
  }
];

export const tools: Tool[] = [
  {
    name: "Calorie Calculator",
    description: "Calculate your daily calorie needs",
    url: "/tools/calorie-calculator"
  },
  {
    name: "BMI Calculator",
    description: "Check your Body Mass Index",
    url: "/tools/bmi-calculator"
  },
  {
    name: "Macro Calculator",
    description: "Calculate your macronutrient needs",
    url: "/tools/macro-calculator"
  }
];

export const socials: Social[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/ralpholazo",
    icon: "𝕏"
  },
  {
    name: "GitHub",
    url: "https://github.com/ralpholazo24",
    icon: "🐙"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ralpholazo",
    icon: "💼"
  }
]; 