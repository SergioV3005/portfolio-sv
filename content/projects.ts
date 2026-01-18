import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "kpi-interpretation",
    title: "Automatic KPI Interpretation with Multimodal LLMs",
    description: "Interpreting business KPI dashboards with multimodal LLMs inside KNIME.",
    bullets: [
      "Built a modular LLM workflow to explain KPI shifts with structured summaries.",
      "Highlighted anomalies and trends using multimodal dashboard inputs.",
      "Delivered consistent, human-readable explanations for stakeholders.",
    ],
    tags: ["GenAI", "KNIME", "LLM", "Analytics"],
    image: "/images/kpis.png",
    links: [
      {
        label: "KNIME Hub",
        href: "https://hub.knime.com/knime/spaces/AI%20Extension%20Example%20Workflows/5%20Use%20Cases/Explain%20KPI%20report%20with%20multimodal%20LLMs~_HVjLdQa2xnChoyO/current-state",
      },
    ],
    featured: true,
  },
  {
    id: "camvid-segmentation",
    title: "Semantic Segmentation on CamVid",
    description:
      "From-scratch U-Net-inspired model compared with MobileNetV2 and DeepLab via transfer learning.",
    bullets: [
      "Implemented a full training and evaluation pipeline with reproducible experiments.",
      "Benchmarked transfer learning variants and tracked class-level metrics.",
      "Packaged data preprocessing, augmentation, and reporting into one workflow.",
    ],
    tags: ["Computer Vision", "Segmentation", "Transfer Learning"],
    image: "/images/camvid.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/hiamrob/camvid-semantic-segmentation",
      },
    ],
    featured: false,
  },
  {
    id: "vla-robotics",
    title: "Vision-Language-Action (VLA) Models for Robotics",
    description:
      "Multimodal agents for robotic pick-and-place following prompt-specified features.",
    bullets: [
      "Research activity (band 25CE114) with currently private repositories (paper under submission).",
      "Benchmarked teleoperation interfaces (with 1-to-1 kynematic map) to train Imitation Learning models.",
      "Experimented extensions of ACT model to support multi-tasking."
    ],
    tags: ["Robotics", "VLA", "Multimodal", "Dataset", "Evaluation"],
    image: "/images/lerobot.jpg",
    links: [
      { label: "LeRobot", href: "https://huggingface.co/lerobot" },
      { label: "LeRobot Docs", href: "https://huggingface.co/lerobot" },
    ],
    featured: true,
  },
  {
    id: "emotion-analysis-stock-tweets",
    title: "Emotion Analysis of Stock Tweets",
    description:
      "Multi-class emotion classification and topic modeling in stock market tweets.",
    bullets: [
      "Emotion classification using TF-IDF, Word2Vec, and contextual embeddings (BERTweet, Distil-RoBERTa).",
      "Topic modeling with LDA and BERTopic.",
      "Integration of emoji features and sentiment lexicons (VADER, NRC, Bing Liu).",
    ],
    tags: ["NLP", "Sentiment Analysis", "Stock Market"],
    image: "/images/emotion-analysis.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/SergioV3005/emotion-analysis-stock-tweets",
      },
    ],
    featured: false,
  },
  {
    id: "llm-belief-bias",
    title: "LLM Belief Bias Evaluation",
    description:
      "Evaluating belief bias in (local) large language models using syllogistic reasoning tasks.",
      bullets: [
        "Investigated belief bias in (local) large language models using syllogistic reasoning tasks.",
        "Designed a questionnaire to measure the influence of prior beliefs on logical reasoning performance.",
        "Benchmarked LLaMa3.2:1b, Mistral:7b and Qwen3:8b."
      ],
    tags: ["NLP", "LLM Evaluation", "Cognitive Science"],
    image: "/images/belief-bias.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/SergioV3005/llm-belief-bias"
      },
    ],
    featured: false,
  },
  {
    id: "hourly-time-series-traffic",
    title: "Hourly Time Series Traffic Forecasting",
    description:
      "Forecasting hourly traffic congestion indicator using classical and deep learning models.",
    bullets: [
      "Compared SARIMA, UCM and deep learning models in the forecast of a hourly time series.",
      "Engineered time-based and lag features to enhance model performance.",
      "Evaluated models using MAE metrics.",
    ],
    tags: ["Time Series", "Forecasting", "Deep Learning"],
    image: "/images/traffic-forecasting.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/SergioV3005/hourly-time-series-traffic"
  }   ],   featured: false,
  },
  {
    id: "jailbreak-game",
    title: "Jailbreak Game with LLMs",
    description:
      "A text-based jailbreak game where players try to make a LLM reveal a secret.",
    bullets: [
      "Developed a text-based jailbreak game using local LLMs.",
      "Implemented difficult levels, with instruction prompt depending on the level.",
      "Created UI for the user to chat with the model and test if they found the secret.",
    ],
    tags: ["NLP", "LLM", "Game Development"],
    image: "/images/jailbreak-game.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/SergioV3005/jailbreak-game"
      },
    ],  featured: false,
  },
  {
    id: "portfolio-optimization",
    title: "Benchmarking Portfolio Optimization Techniques",
    description:
      "A benchmark with multiple optimization strategies on real historical stock data from the Nasdaq.",
    bullets: [
      "Evaluated portfolio optimization techniques using historical stock data.",
      "Explored the Markowitz Optimization and LSTM-based forecasting.",
      "Created a benchmarking framework for portfolio optimization.",
    ],
    tags: ["Portfolio Optimization", "Finance", "Deep Learning"],
    image: "/images/portfolio-optimization.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/khalilvandian/portfolio_management"
      },
    ],  featured: false,
  },
  {
    id: "abstractive-summarization",
    title: "Abstractive Summarization on XSum Dataset",
    description:
      "A benchmark with multiple models and NLP strategies applied to the XSum dataset.",
    bullets: [
      "Compared summarization performance across GRU, attention baselines, transformer models (T5-small, Flan-T5-base) and local LLMs.",
      "Evaluate zero-shot, one-shot and few-shot prompting strategies, and also experimenting PEFT methods (LoRA, Prefix Tuning, ...).",
      "Analyze outputs with ROUGE and BERTScore, and used explainability techniques to interpret models focus.",
    ],
    tags: ["Abstractive Summarization", "NLP", "Deep Learning"],
    image: "/images/abstractive-summarization.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/khalilvandian/NLP-Summarization"
      },
    ],  featured: false,
  },
];