import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  address: "CH-4103 Bottmingen",
  phone: "+41 78 637 35 91",
  email: "[info@orestis.ch](mailto:info@orestis.ch)",
  permit: "Swiss Citizen",
  programmingLanguages:
    "[GitHub](https://github.com/orestis-z) [LinkedIn](https://linkedin.com/in/orestis-z)\n\nDeep Learning, Computer Vision, Robotics, Mobile App Development, Full-Stack Development",
};

export default [
  {
    title: "Experience",
    children: [
      cvChild({
        title: "Senior Machine Learning Engineer",
        subtitles: ["QSC (acq. by Acuity Brands)", "Zurich, CH", "Remote"],
        date: "2023 - Present (1 yr 6 mos)",
        body: "* " + [
          "Ported vision ML models to ONNX and TensorRT, __tripling__ speed and reducing VRAM usage by __15%.__",
          "Increased system speed by __30%__ on resource-constrained hardware through batched inference implementation.",
          "Led CV/ML prototyping in detection, tracking, embeddings, and VLMs with state-of-the-art methods.",
          "Redesigned ML architecture for modularity and flexibility, and led efforts to clean up technical debt.",
          "Co-managed and mentored the ML team, integrated teams, enforced best practices, and led the hiring process.",
          "Technologies: __Python__, __PyTorch__, __TensorRT__, __ONNX__, __Weights & Biases__, __Grafana__, __ROS__, __Docker__, __GCP__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Machine Learning Engineer",
        subtitles: [
          "Seervision (ETHZ Spin-off, acq. by QSC)",
          "Zurich, CH",
          "Remote",
        ],
        date: "2021 - 2023 (2 yrs)",
        body: "* " + [
          "Optimized real-time detection pipeline, reduced latency by __24%__, VRAM by __45%__, and increased accuracy by __10%__.",
          "Designed, prototyped, tuned, and deployed a face recognition system with a false-positive rate below __5%__.",
          "Drove real-time inference optimization efforts, __tripling__ the number of supported clients per hardware unit.",
          "Collaborated with the product team to prototype and experiment with CV/ML systems for novel user experiences.",
          "Technologies: __Python__, __C++__, __PyTorch__, __TensorFlow__, __OpenCV__, __CUDA__, __ROS__, __Docker__, __GitLab CI/CD__, __GCP__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "MLOps Engineer",
        subtitles: [
          "benshi.ai (funded by BMGF)",
          "Barcelona, ES",
          "Hybrid",
        ],
        date: "2020 - 2021 (6 mos)",
        body: "* " + [
          "Built and maintained scalable data pipelines for ML models in production, from data ingestion to deployment.",
          "Technologies: __Python__, __Pandas__, __PySpark__, __Databricks__, __MLflow__, __Docker__, __Kubernetes__, __Azure__, __GitHub Actions__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Web App Developer",
        subtitles: [
          "Civil service",
          "Kantonsspital St. Gallen, CH",
          "On-site",
        ],
        date: "2020 (3 mos)",
        body: "* " + [
          "Developed and maintained a web application, implemented web analytics, SEO.",
          "Technologies: __Vue.js__, __TestCafe__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Full-Stack Machine Learning Engineer",
        subtitles: ["Self-employed"],
        date: "2019 - 2020 (1 yr 3 mos)",
        body: "* " + [
          "Developed a CNN-based face predictor with an __18%__ accuracy improvement, optimized for low-latency inference.",
          "Developed full-stack application with cross-platform frontend and microservice-based cloud architecture.",
          "Technologies: __Python__, __TensorFlow__, __scikit-learn__, __Flask__, __React__, __PostgreSQL__, __AWS__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Co-Founder, Product, Tech Lead",
        subtitles: ["Kimata Networks", "Basel, CH", "Part-time", "Remote"],
        date: "2018 - 2019 (1 yr 3 mos)",
        body: "* " + [
          "Managed a team of 5 developers (frontend and backend), iterated on user feedback, analyzed competitors, and crafted specifications and roadmaps.",
          "Raised CHF 10k through Venture Kick, gaining experience in company founding, business planning, IP, outsourcing, and strategic decision-making..",
          "Technologies: __Java__, __Android__, __React Native__, __libGDX__, __OpenGL__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Mobile App Developer",
        subtitles: ["Nextron internet team GmbH", "Basel, CH", "Part-time", "Remote"],
        date: "2016 - 2017 (6 mos)",
        body: "* " + [
          "Developed a cross-platform mobile app for explora.ch.",
          "Achieved over 2,000 downloads and maintained a __5.0-star__ rating.",
          "Technologies: __React Native__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Junior Mobile App Developer",
        subtitles: ["ETH juniors", "Zurich, CH", "Part-time", "Remote"],
        date: "2016 - 2017 (6 mos)",
        body: "* " + [
          "Developed a React Native mobile app with Firebase.",
          "Technologies: __React Native__, __Firebase__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Control Systems Engineer, Intern",
        subtitles: ["Rapyuta Robotics (ETHZ Spin-off)", "Tokyo, JP", "On-site"],
        date: "2016 - 2017 (1 yr)",
        body: "* " + [
          "Achieved a __55x speedup__ of NumPy-heavy simulation iterations and open-sourced the Python package <a href='https://github.com/wolfv/pyjet' target='_blank'>PyJet</a>.",
          "Designed energy estimators using a Kalman Filter, enhanced tracking controller and performed sensor tests.",
          "Technologies: __Python__, __C++__, __NumPy__, __SciPy__, __ROS__.",
        ].join("\n* "),
      }),
    ],
  },
  {
    title: "Education",
    children: [
      cvChild({
        title: "MSc Robotics, Systems & Control",
        subtitles: ["5.25/6.0", "ETH", "Zurich, CH"],
        date: "2017 - 2019 (2 yrs)",
        body: "* " + [
          "Developed an online deep learning architecture for object instance prediction, pose estimation, and tracking.",
          "Showed that an additional depth input channel improved the segmentation accuracy of Mask R-CNN by __31%__.",
          "Technologies: __Python__, __CUDA C/C++__, __TensorFlow__, __Keras__, __Caffe2__, __OpenCV__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "BSc Mechanical Engineering",
        subtitles: ["5.51/6.0", "ETH", "Zurich, CH"],
        date: "2012 - 2016 (3 yrs 6 mos)",
        body: "* " + [
          "Developed balancing algorithms for a 6DoF [omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) using non-linear control methods.",
          "Technologies: __C++__, __MATLAB__, __Simulink__.",
        ].join("\n* "),
      }),
    ],
  },
  {
    title: "Projects",
    mini: true,
    children: [
      cvChild({
        title: "[Beachin' Rentals](https://g.co/kgs/B73qiZx)",
        date: "2023 - Present",
        body:
          "Self-service kiosk built using __Flask__, __Stripe__, __Shopify__, __RasPi__, __RS-485__.",
      }),
      cvChild({
        title: "[Trap the Cat](https://play.google.com/store/apps/details/Chat_Noir_Hexagon?id=com.kima.chatnoirhex)",
        date: "2023 - 2024",
        body:
          "Mobile app built with __JavaScript__, __CapacitorJS__ and __Firebase__, with __100k+__ downloads.",
      }),
      cvChild({
        title: "[Anti CryptoPunks](https://anticryptopunks.com)",
        date: "2022",
        body:
          "NFT project built on the __Polygon__ blockchain, with __6 ETH__ traded.",
      }),
      cvChild({
        title: "[PyJet](https://github.com/wolfv/pyjet)",
        date: "2015",
        body: "Python library converting __Python/NumPy__ operations to __C++__, achieving a __55x__ speedup.",
      }),
    ],
  },
];
