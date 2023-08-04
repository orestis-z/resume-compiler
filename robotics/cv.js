import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  address: "CH-4103 Bottmingen",
  phone: "+41 78 637 35 91",
  email: "[me@orestisz.com](mailto:me@orestisz.com)",
  // github: "github.com/orestis-z",
  programmingLanguages:
    "[github.com/orestis-z](https://github.com/orestis-z), [linkedin.com/in/orestis-z](https://linkedin.com/in/orestis-z)\n\nDeep Learning, Computer Vision, Robotics, Systems & Control, Distributed Systems",
  // summary:
  //   "MSc ETH robotics engineer with a solid programming background, strong analytical skills and good communication capabilities. I am result driven, pay attention to details and always up to learn new technologies and tools.",
};

export default [
  {
    title: "Experience",
    children: [
      // cvChild(
      //   "Web Application Developer (civil service)",
      //   ["Kantonsspital St Gallen", "St. Gallen, Switzerland"],
      //   ["May 2020", "Jul 2020"],
      //   "* Added new features to a frontend website with __Vue.js__ following integration testing with __TestCafe__"
      // ),
      cvChild(
        "Senior Machine Learning Engineer",
        ["Seervision (ETH Zurich Spin-off)", "Zurich, Switzerland"],
        ["Aug 2021", "Present"],
        "* Optimized person detection and pose estimation pipeline by __3x__, improved accuracy by __10%__, and reduced GPU memory usage by __45%__\n* Built a face recognition system from scratch with a false-positive rate below __5%__\n* __Tripled__ the number of supported systems per hardware unit as technical lead\n* Received recognition for achieving the highest business impact among all engineers in 2022"
        ),
      cvChild(
        "MLOps Engineer",
        ["benshi.ai (Funded by Bill & Melinda Gates Foundation)", "Barcelona, Spain"],
        ["Nov 2020", "June 2021"],
        "* Led creation of data processing tooling with __Databricks__, __Python__, __Spark__, and CI/CD pipelines, securing __$X million__ in funding with mentored engineer\n* Managed ML models' lifecycle, building data pipelines, A/B testing, mock data generation, and RL simulation using __Pandas__, __MLflow__, __Azure__, __Docker__, __Kubernetes__, __Vue.js__, ETL, and statistical modeling"
      ),
      cvChild(
        "Full-Stack Engineer",
        ["Self-employed", "Global (Digital Nomad)"],
        ["Feb 2019", "May 2020"],
        "* Developed and marketed an end-to-end cloud-based AI-powered app, using __TensorFlow__ and __scikit-learn__ to modify and retrain a CNN on a face dataset resulting in an __18%__ improvement in accuracy, and productionized the model for real-time inference\n* Designed cross-platform frontend using __Cordova__, __React Native__, __React.js__, and __Electron__, and deployed scalable microservices to __AWS__ with __Python__/__Flask__, __PostgreSQL__, and proxies"
      ),
      // cvChild(
      //   "Co-Founder, Product Manager & Tech Lead",
      //   ["Kimata Networks", "Basel, Switzerland"],
      //   ["Jan 2018", "Apr 2019"],
      //   "* Created specifications and roadmaps for a digital product, hired and managed an agile team of five frontend and backend developers, iterated on user feedback, analysed the competitive landscape\n* Passed the first Venture Kick stage raising CHF 10k, gained entrepreneurial insights into company founding, business planning, pivoting, intellectual property, outsourcing, accounting, strategic decision-making and marketing\n* Lead the development of a mobile app with __OpenGL__ / __libGDX__, __Java__ / __Android__ and __React Native__"
      // ),
//       cvChild(
//         "Mobile App Developer (side job)",
//         ["nextron internet team", "Part-time", "Basel, Switzerland"],
//         ["Sep 2017", "Aug 2018"],
//         "* Developed and released a cross-platform mobile app with __React Native__ leading to 2,000+ downloads and 5-star rating"
//       ),
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
        "* Pioneered a multi-task CNN deep learning architecture that predicts object instances, human poses, instance masks, and tracks people end-to-end.\n* Implemented CNN using __Caffe2__ and __Python__ including custom operators with __CUDA C/C++__"
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

//   {
//     title: "Projects",
//     children: [
//       cvChild(
//         "Program Optimisation with PyJET",
//         null,
//         null,
//         "* Achieved a __55x__ speedup of math-heavy __Python__ code by converting __NumPy__ operations to performant __C++__\n * Co-created and open-sourced the Python package <a href='https://github.com/orestis-z/pyjet'>PyJET</a> under an MIT License"
//       ),
//       // cvChild(
//       //   "Personal Website",
//       //   null,
//       //   null,
//       //   "* Published my professional website with __React.js__ / __Next.js__ and __AWS__ Lambda on <a href='https://leanmind.ch'>www.leanmind.ch</a> (German)"
//       // ),
//       cvChild(
//         "Mobile Apps",
//         null,
//         null,
//         "* Created entertaining mobile apps with __React Native__ and __Cordova__, and published them on the <a href='https://play.google.com/store/apps/developer?id=LeanMind'>Play Store</a>"
//       ),
//       // cvChild(
//       //  "Resume Compiler",
//       //  null,
//       //  null,
//       //  "* Open-sourced a resume compiler using __Node.js__ at <a href='https://github.com/orestis-z/resume-compiler'>github.com/orestis-z/resume-compiler</a>"
//       // ),
//     ],
//   },
  // {
  //   mini: true,
  //   title: "Other",
  //   children: [
  //     // cvChild(
  //     //   "Skills",
  //     //   [
  //     //     "Python",
  //     //     "C++",
  //     //     "Computer Vision",
  //     //     "Deep Learning",
  //     //     "Program Optimization",
  //     //     "Parallel Computing",
  //     //     "TensorFlow",
  //     //     "Keras",
  //     //     "Caffe2",
  //     //     "CUDA C/C++",
  //     //     "OpenGL",
  //     //     "NumPY",
  //     //     "SciPy",
  //     //     "scikit-learn",
  //     //     "Java",
  //     //     "AWS",
  //     //     "SQL",
  //     //   ],
  //     //   null
  //     // ),
  //     cvChild(
  //       "Languages",
  //       [
  //         "German (mother tongue)",
  //         "Greek (mother tongue)",
  //         "English (fluent)",
  //         "French (intermediate)",
  //         "Spanish (beginner)",
  //         "Italian (beginner)",
  //       ],
  //       null
  //     ),
  //     cvChild(
  //       "Hobbies",
  //       ["Rock climbing", "Saxophone", "Programming", "Traveling"],
  //       null
  //     ),
  //     // cvChild(
  //     //   "Links",
  //     //   ["[linkedin.com/in/orestis-z](https://linkedin.com/in/orestis-z)", "[github.com/orestis-z](https://github.com/orestis-z)", "[me@orestisz.com](mailto:me@orestisz.com)"],
  //     //   null
  //     // ),
  //   ],
  // },
];
