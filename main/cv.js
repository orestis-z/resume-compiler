import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  address: "CH-4103 Bottmingen",
  phone: "+41786373591",
  email: "[info@orestis.ch](mailto:info@orestis.ch)",
  permit: "Swiss Citizen / Resident",
  programmingLanguages:
    "[Portfolio](https://orestis.ch/portfolio) | [GitHub](https://github.com/orestis-z) | [LinkedIn](https://linkedin.com/in/orestis-z)\n\nDeep Learning, Computer Vision,<br>Software Engineering, Robotics",
};

export default [
  {
    title: "Experience",
    children: [
      cvChild({
        title: "Senior ML Engineer / Tech Lead",
        subtitles: ["QSC (acq. by Acuity Brands)", "Zurich, CH", "Remote"],
        date: "Jul 2023 - Present",
        body: "* " + [
          "**Promoted to ML Tech Lead in Dez. 2024**, leading inference strategy, architecture, optimization and team of 3.",
          "Converted single-process architecture to a stage-parallel pipeline, __doubling__ throughput and improving scalability.",
          "Ported vision ML models to TensorRT and DALI, __tripling__ speed and reducing VRAM usage by __15%.__",
          "Increased system speed by __30%__ on resource-constrained hardware through batched inference implementation.",
          "Led CV/ML prototyping in detection, tracking, embeddings, and VLMs with state-of-the-art methods.",
          "Technologies: __TensorRT__, __ONNX__, __Weights & Biases__, __Grafana__, __ROS__, __Docker__, __GCP__, __PyTorch__, __Python__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Machine Learning Engineer",
        subtitles: [
          "Seervision (ETHZ Spin-off, acq. by QSC)",
          "Zurich, CH",
          "Remote",
        ],
        date: "Aug 2021 - Jul 2023",
        body: "* " + [
          "Optimized real-time detection pipeline, reduced latency by __24%__, VRAM by __45%__, and increased accuracy by __10%__.",
          "Designed, prototyped, tuned, and deployed a face recognition system with a false discovery rate below __5%__.",
          "Drove real-time inference optimization efforts, __tripling__ the number of supported clients per hardware unit.",
          "Collaborated with the product team to prototype and experiment with CV/ML systems for novel user experiences.",
          "Technologies: __ROS__, __OpenCV__, __CUDA__, __PyTorch__, __TensorFlow__, __Docker__, __GitLab CI/CD__, __GCP__, __Python__, __C++__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "ML Infrastructure Engineer ",
        subtitles: [
          "benshi.ai (funded by BMGF)",
          "Barcelona, ES",
          "Hybrid",
        ],
        date: "Nov 2020 - Jun 2021",
        body: "* " + [
          "Built cloud infrastructure enabling large-scale ETL pipelines, data analytics and machine learning applications.",
          "Technologies: __Databricks__, __PySpark__, __MLflow__, __Docker__, __Kubernetes__, __Azure__, __GitHub Actions__, __Pandas__, __Python__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Full-Stack Machine Learning Engineer",
        subtitles: ["Self-employed"],
        date: "Feb 2019 - Mar 2020",
        body: "* " + [
          "Developed a CNN-based face predictor with an __18%__ accuracy improvement, optimized for low-latency inference.",
          "Developed full-stack application with cross-platform frontend and microservice-based cloud architecture.",
          "Technologies: __AWS__, __React__, __Flask__, __PostgreSQL__, __TensorFlow__, __scikit-learn__, __Python__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Control Systems Engineer, Intern",
        subtitles: ["Rapyuta Robotics (ETHZ Spin-off)", "Tokyo, JP", "On-site"],
        date: "Mar 2016 - Feb 2017",
        body: "* " + [
          "Achieved a __55x speedup__ of NumPy-heavy simulation iterations and open-sourced the Python package <a href='https://github.com/wolfv/pyjet' target='_blank'>PyJet</a>.",
          "Designed energy estimators using a Kalman Filter, enhanced tracking controller and performed sensor tests.",
          "Technologies: __ROS__, __NumPy__, __SciPy__, __Python__, __C++__.",
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
        date: "2017 - 2019",
        body: "* " + [
          "Developed an online deep learning architecture for object instance prediction, pose estimation, and tracking.",
          "Showed that an additional depth input channel improved the segmentation accuracy of Mask R-CNN by __31%__.",
          "Technologies: __TensorFlow__, __Keras__, __Caffe2__, __OpenCV__, __CUDA C/C++__, __Python__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "BSc Mechanical Engineering",
        subtitles: ["5.51/6.0", "ETH", "Zurich, CH"],
        date: "2012 - 2016",
        body: "* " + [
          "Developed balancing algorithms for a 6DoF [omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) using non-linear control methods.",
          "Technologies: __MATLAB__, __Simulink__, __C++__.",
        ].join("\n* "),
      }),
    ],
  },
  {
    title: "Projects",
    mini: true,
    children: [
      cvChild({
        title: "[Shop Automation](https://orestis.ch/blog/automating-beach-rental-store)",
        date: "2023 - 2025",
        body:
          "Self-service IoT system built using __Flask__, __Stripe__, __Shopify__, __RasPi__, __RS-485__.",
      }),
      cvChild({
        title: "[Trap the Cat](https://play.google.com/store/apps/details/Chat_Noir_Hexagon?id=com.kima.chatnoirhex)",
        date: "2023 - 2024",
        body:
          "Mobile app built with __JavaScript__, __CapacitorJS__ and __Firebase__, with __100k+__ downloads.",
      }),
      cvChild({
        title: "[Machine Dreams](https://orestisz.com/machinedreams/)",
        date: "2022",
        body:
          "Experimental fusion of __AI__ and digital art using __GANs__, creating surreal NFT artworks.",
      }),
      cvChild({
        title: "[Anti CryptoPunks](https://orestisz.com/anticryptopunks)",
        date: "2022",
        body:
          "NFT project built on the __Polygon__ blockchain, with __6 ETH__ traded.",
      }),
      cvChild({
        title: "[PyJet](https://github.com/wolfv/pyjet)",
        date: "2015",
        body:
          "Python library converting __Python/NumPy__ operations to __C++__, achieving a __55x__ speedup.",
      }),
    ],
  },
];
