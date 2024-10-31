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
    "[github.com/orestis-z](https://github.com/orestis-z), [linkedin.com/in/orestis-z](https://linkedin.com/in/orestis-z)\n\nDeep Learning, Computer Vision, Robotics, Systems & Control, Distributed Systems",
};

export default [
  {
    title: "Experience",
    children: [
      cvChild({
        title: "Senior Machine Learning Engineer",
        subtitles: ["(QSC, acq. by Acuity Brands)", "Zurich, CH", "Remote"],
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
          "Recognized for highest engineering business impact in 2022.",
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
        title: "Full-Stack & Machine Learning Engineer",
        subtitles: ["Freelancer", "Remote"],
        date: "2019 - 2020 (1 yr 3 mos)",
        body: "* " + [
          "Developed a CNN-based face predictor with an __18%__ accuracy improvement, optimized for low-latency inference.",
          "Developed full-stack application with cross-platform frontend and microservice-based cloud architecture.",
          "Technologies: __Python__, __TensorFlow__, __scikit-learn__, __Flask__, __React__, __PostgreSQL__, __AWS__.",
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
        title: "Imperial College London",
        subtitles: ["Master's Thesis", "London, UK"],
        date: "2018 - 2019 (6 mos)",
        body: "* " + [
          "Developed an online multi-task deep learning architecture for object instance prediction, pose estimation, and multi-person tracking.",
          "Trained the Siamese network for visual cue matching on MOT dataset using Mask R-CNN outputs.",
          "Technologies: __Python__, __CUDA C/C++__, __Caffe2__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "ETH Zurich",
        subtitles: ["MSc Robotics, Systems & Control", "Zurich, CH"],
        date: "2017 - 2019 (2 yrs)",
        body: "* " + [
          "Showed that an additional depth input channel improved the segmentation accuracy of Mask R-CNN by __31%__; submitted paper to CoRL.",
          "Designed a time-efficient training strategy using data augmentation, synthetic RGB-D and real-world data.",
          "Technologies: __Python__, __TensorFlow__, __Keras__, __OpenCV__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "ETH Zurich",
        subtitles: ["BSc Mechanical Engineering", "Zurich, CH"],
        date: "2012 - 2016 (3 yrs 6 mos)",
        body: "* " + [
          "Graduated __top 5%__ of the class.",
          "Developed balancing algorithms for a 6DoF [omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) using non-linear control methods.",
          "Technologies: __C++__, __MATLAB__, __Simulink__.",
        ].join("\n* "),
      }),
    ],
  },
];
