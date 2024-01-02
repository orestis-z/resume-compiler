import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  address: "CH-4103 Bottmingen",
  phone: "+41 78 637 35 91",
  email: "[me@orestisz.com](mailto:me@orestisz.com)",
  programmingLanguages:
    "[github.com/orestis-z](https://github.com/orestis-z), [linkedin.com/in/orestis-z](https://linkedin.com/in/orestis-z)\n\nDeep Learning, Computer Vision, Robotics, Systems & Control, Distributed Systems",
};

export default [
  {
    title: "Experience",
    children: [
      cvChild(
        "Senior Machine Learning Engineer",
        [
          "Seervision (ETH Zurich Spin-off, acquired by Q-SYS)",
          "Zurich, Switzerland",
        ],
        ["Aug 2021", "Present"],
        "* Optimized person detection and pose estimation pipeline, __tripling__ performance, increasing accuracy by __10%__, and reducing GPU memory usage by __45%__ using __ONNX__ and __TensorRT__\n* Created a face recognition system with under __5%__ false-positive rate, greatly enhancing product value\n* Drove efforts to __triple__ supported systems per hardware unit, enhancing scalability\n* Prototyped a multi-view grid for hybrid meeting rooms, a decisive factor in the acquisition by Q-SYS\n* Received recognition for achieving the highest business impact among all engineers in 2022\n* Enhanced expertise in __ROS__, __C++__, __Python__, __PyTorch__, __OpenCV__, __CUDA__, __Docker__, CI/CD and system monitoring"
      ),
      cvChild(
        "MLOps Engineer",
        [
          "benshi.ai (Funded by Bill & Melinda Gates Foundation)",
          "Barcelona, Spain",
        ],
        ["Nov 2020", "June 2021"],
        "* Led data processing tools development with __Databricks__, __Spark__, and CI/CD, securing __$X million__ funding\n* Managed the ML model lifecycle, employing __Pandas__, __MLflow__, __Azure__, __Docker__, __Kubernetes__, and ETL processes"
      ),
      cvChild(
        "Full-Stack & Machine Learning Engineer",
        ["Self-employed", "Global (Digital Nomad)"],
        ["Feb 2019", "May 2020"],
        "* Developed an end-to-end, cloud-based AI app with __TensorFlow__ and __scikit-learn__, enhancing CNN-based face recognition accuracy by __18%__ and optimizing for real-time inference\n* Designed cross-platform frontend using __Cordova__, __React Native__, __React.js__, and __Electron__, and deployed scalable microservices to __AWS__ with __Python__/__Flask__, __PostgreSQL__, and proxies"
      ),
      cvChild(
        "Control Systems Engineer, Intern",
        ["Rapyuta Robotics (ETH Zurich Spin-off)", "Tokyo, Japan"],
        ["Mar 2016", "Feb 2017"],
        "* Achieved a __55x__ speedup of __NumPy__-heavy simulation iterations and open-sourced the __Python__ package <a href='https://github.com/wolfv/pyjet' target='_blank'>PyJet</a>\n* Designed energy estimators for a multicopter using a Kalman Filter (EKF), __Python__, __SciPy__, and __C++__\n* Improved a setpoint tracking controller and conducted sensor tests for a multicopter using __C++__ and __Python__"
      ),
    ],
  },

  {
    title: "Education",
    children: [
      cvChild(
        "Imperial College London",
        ["Master's Thesis", "London, United Kingdom"],
        ["Aug 2018", "Mar 2019"],
        "* Pioneered a multi-task CNN deep learning architecture that predicts object instances, human poses, instance masks, and tracks people end-to-end.\n* Implemented a CNN using __Caffe2__ and __Python__ including custom operators with __CUDA C/C++__"
      ),
      cvChild(
        "ETH Zurich",
        ["MSc Robotics, Systems & Control", "Zurich, Switzerland"],
        ["Feb 2017", "Mar 2019"],
        "* Introduced a method to boost scene understanding for robotic systems equipped with RGB-D sensors\n* Showed that an additional depth input channel improves the segmentation accuracy of Mask R-CNN by __31%__\n* Submitted paper to CoRL 2018 and leveraged knowledge in __TensorFlow__, __Keras__, __OpenCV__ and __Python__"
      ),
      cvChild(
        "ETH Zurich",
        ["BSc Mechanical Engineering", "Zurich, Switzerland"],
        ["Sep 2012", "Feb 2016"],
        "* Graduated with more than two standard deviations above the average (top __5%__)\n* Implemented balancing manoeuvres for the [Omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) to demonstrate its 6DoF flying versatility\n* Derived system dynamics, synthesised non-linear attitude control algorithms, and a Kalman filter using quaternions, __C++__ and __MATLAB__ / __Simulink__"
      ),
    ],
  },
];
