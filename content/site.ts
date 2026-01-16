import { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Sergio Verga",
  headline: "Data Engineer | AI Engineer",
  heroTagline: "Building reliable data and AI pipelines for robotics, analytics, and LLM systems.",
  description:
    "Data engineer and AI engineer with an MSc in Data Science and a BSc in Physics. I design data pipelines, evaluation loops, and LLM/RAG workflows that move research prototypes into reliable systems.",
  url: "https://sergiov3005.github.io",
  email: "sergioverga3005@gmail.com",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Writing", href: "/writing" },
    { label: "About", href: "/about" },
    { label: "CV", href: "/cv" },
  ],
  socials: [
    { label: "Email", href: "mailto:sergioverga3005@gmail.com" },
    { label: "GitHub", href: "https://github.com/SergioV3005" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sergio-verga-5b071b2b6" },
    { label: "Hugging Face", href: "https://huggingface.co/sergiov2000" },
    { label: "Medium", href: "https://medium.com/@sergiov3005" },
  ],
  about:
    "I am an external research collaborator at the Intelligent Sensing Lab (ISLab) at the University of Milano-Bicocca, working on ML for robotics with a focus on vision-language-action models. My background combines an MSc in Data Science with a BSc in Physics, which helps me move from theory to production-ready systems.",
  aboutFocus:
    "My current focus is on data engineering and AI engineering for LLM and RAG pipelines: building ingestion, labeling, evaluation, and monitoring workflows that keep models reliable over time.",
  facts: [
    "MSc in Data Science, University of Milano-Bicocca",
    "BSc in Physics, University of Milano-Bicocca",
    "External collaborator, ISLab (grant Cod 25CE114)",
    "Interests: RL for Robotics, Deep Learning, NLP",
  ],
  skills: [
    "Python",
    "TypeScript/Node",
    "SQL",
    "Hugging Face",
    "PyTorch",
    "TensorFlow",
    "KNIME",
    "Git",
    "Docker",
  ],
  personal: "Outside of work I enjoy calisthenics, reading, and traveling.",
};
