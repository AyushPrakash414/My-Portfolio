const config = {
  title: "Ayush Prakash Tiwari | Full Stack Developer & AI/ML Engineer",
  description: {
    long: "Explore the portfolio of Ayush Prakash Tiwari, a full-stack developer and AI/ML engineer specializing in deep learning, interactive web experiences, and innovative projects. Discover my latest work, including GAN-based video enhancement, Secure Image Vault, Cube Tutor AI, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ayush Prakash Tiwari, a full-stack developer and AI/ML engineer creating innovative web experiences and deep learning projects.",
  },
  keywords: [
    "Ayush Prakash Tiwari",
    "portfolio",
    "full-stack developer",
    "AI/ML engineer",
    "deep learning",
    "web development",
    "3D animations",
    "GAN Video Enhancement",
    "Secure Image Vault",
    "Cube Tutor AI",
    "Spring Boot",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
  ],
  author: "Ayush Prakash Tiwari",
  email: "prakashayush414@gmail.com",
  site: "https://github.com/AyushPrakash414/My-Portfolio",

  // for github stars button
  githubUsername: "AyushPrakash414",
  githubRepo: "My-Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/iammrprakash29",
    linkedin: "https://www.linkedin.com/in/ayush-prakash-tiwari-5281b2286/",
    github: "https://github.com/AyushPrakash414",
  },
};
export { config };
