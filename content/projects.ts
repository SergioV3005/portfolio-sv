import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "vla-robotics",
    title: "Vision-Language-Action (VLA) Models for Robotics",
    description:
      "Multimodal agents for robotic pick-and-place following prompt-specified features.",
    bullets: [
      "MSc thesis and ongoing research with private repositories and internal tooling.",
      "Built dataset collection and labeling workflows to support multi-task training.",
      "Designed evaluation harnesses for policy robustness and task success metrics."
    ],
    tags: ["Robotics", "VLA", "Multimodal", "Dataset", "Evaluation"],
    image: "/images/lerobot.jpg",
    links: [
      { label: "LeRobot", href: "https://huggingface.co/lerobot" },
      { label: "LeRobot Docs", href: "https://huggingface.co/lerobot" }
    ],
    featured: true
  },
  {
    id: "camvid-segmentation",
    title: "Semantic Segmentation on CamVid",
    description:
      "From-scratch U-Net-inspired model compared with MobileNetV2 and DeepLab via transfer learning.",
    bullets: [
      "Implemented a full training and evaluation pipeline with reproducible experiments.",
      "Benchmarked transfer learning variants and tracked class-level metrics.",
      "Packaged data preprocessing, augmentation, and reporting into one workflow."
    ],
    tags: ["Computer Vision", "Segmentation", "Transfer Learning"],
    image: "/images/camvid.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/hiamrob/camvid-semantic-segmentation"
      }
    ],
    featured: false
  },
  {
    id: "kpi-interpretation",
    title: "Automatic KPI Interpretation (KNIME + GenAI)",
    description: "Interpreting business KPI dashboards with multimodal LLMs inside KNIME.",
    bullets: [
      "Built a modular LLM workflow to explain KPI shifts with structured summaries.",
      "Highlighted anomalies and trends using multimodal dashboard inputs.",
      "Delivered consistent, human-readable explanations for stakeholders."
    ],
    tags: ["GenAI", "KNIME", "LLM", "Analytics"],
    image: "/images/kpis.png",
    links: [
      {
        label: "KNIME Hub",
        href: "https://hub.knime.com/knime/spaces/AI%20Extension%20Example%20Workflows/5%20Use%20Cases/Explain%20KPI%20report%20with%20multimodal%20LLMs~_HVjLdQa2xnChoyO/current-state"
      }
    ],
    featured: true
  }
];
