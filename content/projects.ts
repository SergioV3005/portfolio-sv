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
      }], featured: false,
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
    ], featured: false,
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
    ], featured: false,
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
    ], featured: false,
  },
  {
    id: "chopper-preamplifier-proton-sound",
    title: "MATLAB Modelling of a Chopper Preamplifier for Proton Sound Detectors (BSc Thesis)",
    description:
      "Bachelor’s thesis: modelling and analyzing a chopper-stabilized preamplifier chain for proton sound detector readout in MATLAB.",
    bullets: [
      "Developed a MATLAB model of the chopper preamplifier signal chain to study noise, gain, and stability trade-offs.",
      "Simulated key operating conditions and design parameters to evaluate performance and guide design choices.",
      "Documented the modelling approach, assumptions, and results in a reproducible thesis workflow and codebase.",
    ],
    tags: ["MATLAB", "Signal Processing", "Analog Electronics", "Modeling"],
    image: "/images/chopper-preamplifier.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/SergioV3005/Matlab-Modelling-of-a-Chopper-Preamplifier-for-Proton-Sound-Detectors",
      },
    ],
    featured: false,
  },
  {
    id: "lex-rag-lab",
    title: "Lex-RAG Lab",
    description:
      "Quick demo of Lex-RAG pipelines for document retrieval and question answering (currently no vector store, but BM25).",
    bullets: [
      "Implemented retrieval pipelines using lexical search (e.g., BM25).",
      "Built an end-to-end workflow for chunking, indexing, querying, and answer generation over custom documents.",
      "More to be done on retrieval quality and prompting strategies to improve grounded, citation-aware responses.",
    ],
    tags: ["RAG", "Information Retrieval", "LLM", "NLP"],
    image: "/images/lex-rag-lab.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/SergioV3005/lex-rag-lab",
      },
    ],
    featured: false,
  },
  {
    id: "text2topic-dsl",
    title: "Text2Topic: Multi-Label Topic Classification (Data Science Lab)",
    description:
      "Multi-label topic classification to automate tagging and improve content organization for Doppiozero’s CMS, benchmarked across classical ML, pretrained embeddings, and LLM approaches.",
    bullets: [
      "Explored and cleaned a large-scale dataset (~200k articles) and defined a practical labeling policy (≤3 labels/article) using probability thresholds to reduce noisy tags.",
      "Addressed class imbalance with targeted text augmentation (synonym replacement, back-translation, sentence shuffling, contextual BERT augmentation) to build a balanced training set.",
      "Benchmarked Random Forest (TF-IDF), Universal Sentence Encoder embeddings, BART zero-shot, a custom neural model, and prompted LLMs; USE emerged as the strongest overall traditional approach in the comparison.",
    ],
    tags: ["NLP", "Multi-Label Classification", "Text Embeddings", "Benchmarking"],
    image: "/images/text2topic.png",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/alexcalabrese/dsl_project",
      },
    ],
    featured: false,
  },
  {
    id: "kpis-datawarehouse",
    title: "KPIs-Datawarehouse",
    description:
      "A KNIME workflow to automate the computation and storage of 6 key business KPIs into a SQLite database.",
    bullets: [
      "Built an automated ETL pipeline to extract 6 business KPIs for various years and save them into a structured SQLite database.",
      "Implemented modular logic where each KPI is computed in a dedicated sub-workflow before being aggregated.",
      "Configured dynamic database interactions using DB Writer for initial setup and DB Insert for incremental year-by-year updates.",
      "Optimized the storage architecture to serve as the backend for an interactive 6 KPIs Data App dashboard.",
    ],
    tags: ["KNIME", "Finance", "ETL", "SQLite", "Analytics"],
    image: "/images/kpis-datawarehouse.png",
    links: [
      {
        label: "KNIME Hub",
        href: "https://hub.knime.com/knime/spaces/KNIME%20for%20Finance/KPI/Data%20App%20-%206%20KPIs%20for%20any%20CEO/Writing%20to%20a%20Database%20-%206%20KPIs%20for%20any%20CEO~RExXC8o5QgZhqasG/current-state",
      },
    ],
    featured: false,
  },
];