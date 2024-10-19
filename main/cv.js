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
        subtitles: ["QSC", "Zurich, CH", "Remote"],
        date: "2023 - Present (1 yr 6 mos)",
        body: "* " + [
          "Ported all vision ML models to ONNX and __TensorRT__, __tripling__ pipeline speed and reducing VRAM usage by __15%__",
          "Implemented batched inference, increasing system speed by __30%__ on resource-constrained hardware",
          "Led efforts to prototype CV/ML systems using the latest state-of-the-art advances",
          "Redesigned ML architecture for modularity and flexibility, and led efforts to clean up technical debt",
          "Co-managed and mentored the ML team, integrating teams and enforcing best practices",
          "Built monitoring tools for vision pipeline performance, enhancing observability and alerting capabilities",
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
          "Optimized real-time person detection and pose estimation pipeline, reducing latency by __24%__, VRAM usage by __45%__, and increased accuracy by __10%__",
          "Designed, prototyped, tuned, and deployed a face recognition system with a false-positive rate below __5%__",
          "Drove real-time inference optimization efforts, __tripling__ the number of supported systems per hardware unit",
          "Collaborated with the product team to prototype and experiment with CV/ML systems for novel user experiences",
          "Received recognition for achieving the highest business impact among all engineers in 2022",
          "Enhanced expertise in __ROS__, __C++__, __Python__, __PyTorch__, __OpenCV__, __CUDA__, __Docker__, CI/CD, SDLC, and monitoring",
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
          "Designed and maintained a scalable data pipeline, and led development using __Databricks__, __Spark__, and CI/CD",
          "Managed the ML model lifecycle, from data ingestion to deployment, utilizing __Pandas__, __MLflow__, __Azure__, __Docker__, and __Kubernetes__",
        ].join("\n* "),
      }),
      cvChild({
        title: "Full-Stack & Machine Learning Engineer",
        subtitles: ["Freelancer", "Remote"],
        date: "2019 - 2020 (1 yr 4 mos)",
        body: "* " + [
          "Designed, prototyped, trained, and deployed a CNN-based face predictor using __TensorFlow__ and __scikit-learn__, achieved an __18%__ improvement in accuracy and optimized it for low-latency inference",
          "Designed a cross-platform architecture using __Cordova__, __React Native__, __React.js__, and __Electron__ for the frontend; deployed scalable microservices to __AWS__ with __Python__/__Flask__, __PostgreSQL__, and proxies",
        ].join("\n* "),
      }),
      cvChild({
        title: "Control Systems Engineer, Intern",
        subtitles: ["Rapyuta Robotics (ETHZ Spin-off)", "Tokyo, JP", "On-site"],
        date: "2016 - 2017 (1 yr)",
        body: "* Achieved a __55x__ speedup of __NumPy__-heavy simulation iterations and open-sourced the __Python__ package <a href='https://github.com/wolfv/pyjet' target='_blank'>PyJet</a>\n* Designed energy estimators for a multicopter using a Kalman Filter (EKF), __Python__, __SciPy__, and __C++__\n* Enhanced a setpoint tracking controller and performed sensor tests for a multicopter using __C++__ and __Python__",
      }),
    ],
  },
  {
    title: "Education",
    children: [
      cvChild({
        title: "Imperial College London",
        subtitles: ["Master's Thesis", "London, UK"],
        date: "2018 - 2019 (7 mos)",
        body: "* " + [
          "Pioneered an online multi-task CNN deep learning architecture for object instance prediction, human pose estimation, instance masking, as well as multi-person tracking",
          "Trained the visual cue-matching head of a Siamese network using Mask R-CNN outputs on the MOT dataset",
          "Implemented a CNN using __Caffe2__ and __Python__ including custom operators with __CUDA C/C++__",
        ].join("\n* "),
      }),
      cvChild({
        title: "ETH Zurich",
        subtitles: ["MSc Robotics, Systems & Control", "Zurich, CH"],
        date: "2017 - 2019 (2 yrs)",
        body: "* " + [
          "Showed that an additional depth input channel improved the segmentation accuracy of Mask R-CNN by __31%__",
          "Designed a time-efficient training strategy using data augmentation, pretraining on synthetic RGB-D data, and fine-tuning on real-world data",
          "Submitted paper to CoRL 2018 and leveraged knowledge in __TensorFlow__, __Keras__, __OpenCV__, and __Python__",
        ].join("\n* "),
      }),
      cvChild({
        title: "ETH Zurich",
        subtitles: ["BSc Mechanical Engineering", "Zurich, CH"],
        date: "2012 - 2016 (3 yrs 6 mos)",
        body: "* " + [
          "Graduated with more than two standard deviations above the average (top __5%__)",
          "Implemented balancing maneuvers for the [Omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) to demonstrate its 6DoF flying versatility",
          "Derived system dynamics, synthesized non-linear attitude control algorithms, simulation environment, and a Kalman filter using quaternions, __C++__ and __MATLAB__ / __Simulink__",
        ].join("\n* "),
      }),
    ],
  },
];
