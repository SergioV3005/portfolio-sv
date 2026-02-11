import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    title: "External Research Collaborator (AI for Robotics)",
    org: "Intelligent Sensing Lab (ISLab), Univ. of Milano-Bicocca",
    href: "https://islab.disco.unimib.it/",
    period: "Mar 2025 - Oct 2025",
    image: "/logos/logo_islab.png",
    description: [
      "Research project: “Data Collection and Analysis of Human–Machine Interaction in the Context of Industry 5.0” (Cod. 25CE114).",
      "Part of HOMEY – A Human-centric IoE-based Framework for Supporting the Transition Towards Industry 5.0 (PRIN 2022, ID 2022-NAZ-0329/PER, funded by the EU – NextGenerationEU).",
      "Collected and analyzed human-robot interaction data using the LeRobot framework.",
      "Extended ACT policy models with visual task encoding, evaluated multi-task learning performance, and benchmarked wearable-sensor-based control (Movella Xsens Dot) vs. leader-arm teleoperation.",
    ],
  },
  {
    title: "Data Scientist - ML",
    org: "KNIME GmbH (Berlin, Germany)",
    href: "https://www.knime.com/",
    period: "Oct 2024 - Dec 2024",
    image: "/logos/logo_knime.png",
    description: [
      "Worked within the Evangelism Team, focusing on the integration of Generative AI and data analytics through KNIME workflows.",
      "Developed a complete data app assembling the KPI dashboard featured in KNIME’s official blog post “6 CEO KPIs and How to Measure Them,” including workflows for both the KPI data warehouse and the dynamic dashboard.",
      "Authored the blog “Visualize Your Revenue Growth KPI with K-AI.”",
      "Built GenAI workflows using multimodal local LLMs to automatically explain KPI reports, and created the corresponding workflow, presentation slides, and blog post. This project was presented at 5+ conferences.",
      "Designed feature engineering pipelines powered by Generative AI, complemented by technical blogs and documentation.",
      "Co-facilitated the KNIME GenAI Learnathon at the University of Pisa, mentoring over 100 students.",
    ],
  },
  {
    title: "Research Intern - Microelectronics",
    org: "Microelectronics Group - UniMiB (Milan, Italy)",
    href: "https://www.fisica.unimib.it/it/ricerca/elettronica-e-fisica-applicata/microelectronic-group-unimib",
    period: "Oct 2022 - Feb 2023",
    image: "/logos/logo_microlab.png",
    description: [
      "Worked on a research project in microelectronics, focused on Protond Sound Detectors.",
      "The experiment is based on sensing the weak thermoacoustic signal emitted by the fast energy deposition (and/or theheating process) at the end of the beam range (Bragg Peak)",
      "Implemented a Matlab simulation of a chopper-stabilized preamplifier to model and reduce low-frequency noise in the analog frontend.",
      "Analyzed the performance of the preamplifier in terms of noise reduction and signal fidelity.",
    ],
  },
];
