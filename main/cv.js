import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  phone: "+41786373591",
  email: "[info@orestis.ch](mailto:info@orestis.ch)",
  permit: "Swiss Citizen",
  programmingLanguages:
    "[Portfolio](https://orestis.ch/portfolio) | [GitHub](https://github.com/orestis-z) | [LinkedIn](https://linkedin.com/in/orestis-z)\n\nDeep Learning, Computer Vision,<br>Software Engineering, Robotics",
};

export default [
  {
    title: "Experience",
    children: [
      cvChild({
        title: "Senior ML Engineer",
        subtitles: ["Red Hat (vLLM)", "Zurich, CH", "Remote"],
        date: "May 2026 - Present",
        // body: "* " + [
        //   "",
        // ].join("\n* "),
        body: "Maintaining [speculators](https://github.com/vllm-project/speculators) in the [vllm](https://github.com/vllm-project/vllm) ecosystem.",
      }),
      cvChild({
        title: "Senior ML Engineer / Tech Lead",
        subtitles: ["QSC", "Zurich, CH", "Remote"],
        date: "Jul 2023 - Apr 2026",
        body: "* " + [
          "**Promoted to ML Tech Lead in Dec. 2024**, leading inference strategy, architecture, optimization and a **team of 3**.",
          "Converted single-process architecture to a stage-parallel pipeline, **doubling** throughput and improving scalability.",
          "Ported vision ML models to TensorRT and DALI, **tripling** speed and reducing VRAM usage by **15%**.",
          "Increased system speed by **30%** on resource-constrained hardware through dynamic batch inference.",
          "Technologies: TensorRT, ONNX, Weights & Biases, Grafana, ROS, Docker, GCP, PyTorch, Python.",
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
          "Optimized the real-time vision pipeline, **doubling** supported video streams per hardware unit.",
          "Achieved **24%** lower latency, **45%** less VRAM, and **10%** higher accuracy via SOTA adoption.",
          "Designed, prototyped, tuned, and deployed a face recognition system with precision above **95%**.",
          "Technologies: ROS, OpenCV, CUDA, PyTorch, TensorFlow, Docker, GitLab CI/CD, GCP, Python, C++.",
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
          "Built cloud infrastructure enabling **large-scale** ETL pipelines, data analytics and machine learning applications.",
          "Technologies: Databricks, PySpark, MLflow, Docker, Kubernetes, Azure, GitHub Actions, Pandas, Python.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Full-Stack Machine Learning Engineer",
        subtitles: ["Self-employed"],
        date: "Feb 2019 - Mar 2020",
        body: "* " + [
          "Developed a CNN-based face predictor with an **18%** accuracy improvement, optimized for inference.",
          "Developed full-stack application with cross-platform frontend and microservice-based cloud architecture.",
          "Technologies: AWS, React, Flask, PostgreSQL, TensorFlow, scikit-learn, Python.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Control Systems Engineer, Intern",
        subtitles: ["Rapyuta Robotics (ETHZ Spin-off)", "Tokyo, JP", "On-site"],
        date: "Mar 2016 - Feb 2017",
        body: "* " + [
          "Achieved a **55x speedup** of NumPy-heavy simulation iterations and open-sourced the Python package [PyJet](https://github.com/wolfv/pyjet).",
          "Designed energy estimators using a Kalman Filter (EKF), enhanced tracking controller and performed sensor tests.",
          "Technologies: ROS, NumPy, SciPy, Python, C++.",
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
          "Showed that an additional depth input channel improved the segmentation accuracy of Mask R-CNN by **31%**.",
          "Technologies: TensorFlow, Keras, Caffe2, OpenCV, CUDA C/C++, Python.",
        ].join("\n* "),
      }),
      cvChild({
        title: "BSc Mechanical Engineering",
        subtitles: ["5.51/6.0", "ETH", "Zurich, CH"],
        date: "2012 - 2016",
        body: "* " + [
          "Developed balancing algorithms for a 6DoF [omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) using non-linear control methods.",
          "Technologies: MATLAB, Simulink, C++.",
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
          "Self-service IoT system built using Flask, Stripe, Shopify, RasPi, RS-485.",
      }),
      cvChild({
        title: "[Trap the Cat](https://play.google.com/store/apps/details/Chat_Noir_Hexagon?id=com.kima.chatnoirhex)",
        date: "2023 - 2024",
        body:
          "Mobile app built with JavaScript, CapacitorJS and Firebase, with **100k+** downloads.",
      }),
      cvChild({
        title: "[Machine Dreams](https://orestisz.com/machinedreams/)",
        date: "2022",
        body:
          "Experimental fusion of AI and digital art using GANs, creating surreal NFT artworks.",
      })
    ],
  },
];
