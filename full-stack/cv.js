import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  address: "CH-4103 Bottmingen",
  phone: "+41 78 637 35 91",
  email: "[me@orestisz.com](mailto:me@orestisz.com)",
  permit: "Swiss Citizen",
  programmingLanguages:
    "[github.com/orestis-z](https://github.com/orestis-z), [linkedin.com/in/orestis-z](https://linkedin.com/in/orestis-z)\n\nDeep Learning, Computer Vision, Machine Learning Engineering, MLOps, Full-Stack Development",
};

export default [
  {
    title: "Experience",
    children: [
      cvChild({
        title: "Senior Machine Learning Engineer",
        subtitles: ["QSC", "Zurich, Switzerland", "Remote"],
        date: "Jul 2023 - Present",
        body:
          "* " +
          [
            "Optimized vision ML models with __ONNX__ and __TensorRT__, __tripling__ pipeline speed and reducing VRAM usage by __15%__.",
            "Implemented batched inference, boosting system speed by __30%__ on resource-constrained hardware.",
            "Developed evaluation and monitoring tools for the ML pipeline using __Grafana__, __InfluxDB__, and __Weights & Biases__.",
            "Redesigned ML architecture for greater modularity and reduced technical debt.",
            "Led CV/ML prototyping driven by the state of the art and benchmarked DL models.",
            "Co-managed ML team, enforced best practices, integrated teams, and led hiring.",
          ].join("\n* "),
      }),
      cvChild({
        title: "Machine Learning Engineer",
        subtitles: ["Seervision AG", "Zurich, Switzerland", "Remote"],
        date: "Aug 2021 - Jul 2023",
        body:
          "* " +
          [
            "Enhanced real-time person detection pipeline, reducing latency by __24%__ and improving accuracy by __10%__.",
            "Deployed a face recognition system with a false-positive rate below __5%__.",
            "Tripled supported systems per hardware unit via real-time inference optimization.",
            "Collaborated with product teams to prototype new CV/ML features.",
            "Enhanced expertise in __Python__, __C++__, __PyTorch__, __OpenCV__, __CUDA__, __Docker__, GitLab __CI/CD__, __GCP__ and monitoring.",
          ].join("\n* "),
      }),
      cvChild({
        title: "MLOps Engineer",
        subtitles: ["benshi.ai", "Barcelona, Spain", "Hybrid"],
        date: "Nov 2020 - Jun 2021",
        body:
          "* " +
          [
            "Designed and maintained scalable data pipelines using __Databricks__, __Spark__, and __CI/CD__.",
            "Managed ML model lifecycle from data ingestion to deployment using __Docker__, __Kubernetes__, and __Azure__.",
          ].join("\n* "),
      }),
      cvChild({
        title: "Web App Developer (Civil Service)",
        subtitles: ["Kantonsspital St.Gallen", "St Gallen, Switzerland", "On-site"],
        date: "May 2020 - Jul 2020",
        body:
          "* " +
          [
            "Developed and maintained a web application using __Vue.js__, with end-to-end testing via __TestCafe__.",
            "Implemented web analytics and feedback tools to measure KPIs; optimized search results with __SEO__.",
          ].join("\n* "),
      }),
      cvChild({
        title: "Full-Stack Machine Learning Engineer",
        subtitles: ["Self-employed"],
        date: "Feb 2019 - May 2020",
        body:
          "* " +
          [
            "Developed and deployed a CNN-based face predictor with an __18%__ accuracy improvement.",
            "Designed a cross-platform architecture using __Cordova__, __React Native__, and Python/__Flask__ microservices on __AWS__.",
          ].join("\n* "),
      }),
    ],
  },
  {
    title: "Education",
    children: [
      cvChild({
        title: "ETH Zurich",
        subtitles: ["MSc Robotics, Systems & Control", "Zurich, Switzerland"],
        date: "2017 - 2019",
        body:
          "* " +
          [
            "Graduated with a Swiss grade of __5.25/6__.",
            "Master's thesis on an online multi-task Siamese CNN deep learning model.",
            "Semester thesis on improving segmentation accuracy of Mask R-CNN by __31%__ using additional depth input.",
            "Leveraged knowledge in __TensorFlow__, __Keras__, __OpenCV__, __Python__, and __CUDA C/C++__.",
          ].join("\n* "),
      }),
      cvChild({
        title: "ETH Zurich",
        subtitles: ["BSc Mechanical Engineering", "Zurich, Switzerland"],
        date: "2012 - 2016",
        body:
          "* " +
          [
            "Graduated with a Swiss grade of __5.51/6__ (top __5%__).",
            "Implemented balancing maneuvers for the [Omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) to demonstrate 6DoF flying versatility.",
            "Derived system dynamics and synthesized non-linear attitude control algorithms using __C++__ and __MATLAB__/__Simulink__.",
          ].join("\n* "),
      }),
    ],
  },
  {
    title: "Projects",
    mini: true,
    children: [
      cvChild({
        title: "Beachin' Rentals",
        date: "2023 - Present",
        body:
          "Self-service kiosk built using __Flask__, __Stripe__, __Shopify__, __RasPi__, __RS-485__.",
        subtitles: ["_[Link](https://g.co/kgs/B73qiZx)_"],
      }),
      cvChild({
        title: "Trap the Cat",
        date: "2023 - 2024",
        body:
          "Mobile app built with __JavaScript__, __CapacitorJS__ and __Firebase__, with __100k+__ downloads.",
        subtitles: ["_[Link](https://play.google.com/store/apps/details/Chat_Noir_Hexagon?id=com.kima.chatnoirhex)_"],
      }),
      cvChild({
        title: "Anti CryptoPunks",
        date: "2022",
        body:
          "NFT project built on the __Polygon__ blockchain, with __6 ETH__ traded.",
        subtitles: ["_[Link](https://anticryptopunks.com)_"],
      }),
      cvChild({
        title: "PyJet",
        date: "2015",
        body: "Python library converting __Python/NumPy__ operations to __C++__, achieving a __55x__ speedup.",
        subtitles: ["_[Link](https://github.com/wolfv/pyjet)_"],
      }),
    ],
  },
];
