import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  address: "CH-4103 Bottmingen",
  phone: "+41 78 637 35 91",
  email: "me@orestisz.com",
  github: "github.com/orestis-z",
  programmingLanguages:
    "C++, Python, Machine Learning, Computer Vision, Data Engineering, Cloud Infrastructure",
  // summary:
  //   "MSc ETH robotics engineer with a solid programming background, strong analytical skills and good communication capabilities. I am result driven, pay attention to details and always up to learn new technologies and tools.",
};

export default [
  {
    title: "Experience",
    children: [
      // cvChild(
      //   "Web Application Developer (civil service)",
      //   ["Kantonsspital St Gallen · Full-time", "St. Gallen, Switzerland"],
      //   ["May 2020", "Jul 2020"],
      //   "* Added new features to a frontend website with __Vue.js__ following integration testing with __TestCafe__"
      // ),
      cvChild(
        "Machine Learning Engineer",
        ["benshi.ai · Full-time", "Barcelona, Catalonia"],
        ["Nov 2020", "Present"],
        "* Lead the creation of the data processing infrastructure using __Databricks__, __PySpark__ and CI/CD pipelines\n* Leveraged additional knowledge in __MLflow__, __Azure__, __Docker__ and __Kubernetes__"
      ),
      cvChild(
        "Full-Stack Engineer w/ Machine Learning",
        ["LeanMind · Self-employed", "Basel, Switzerland / Global"],
        ["Jul 2019", "May 2020"],
        "* Modified and retrained a CNN with __TensorFlow__ and __scikit-learn__ on a dataset of faces leading to an __18%__ higher prediction accuracy compared to the state-of-the-art\n* Developed a frontend using __Cordova__, __React Native__, __React.js__ and __Electron__ to support mobile, web and desktop apps with one code-base\n* Developed a backend composed of four scalable microservices with __Python__ / __Flask__ and __PostgreSQL__, and deployed it to __AWS__ OpsWorks"
      ),
      cvChild(
        "Co-Founder, Technical Lead",
        ["Kimata Networks · Full-time", "Basel, Switzerland"],
        ["Jan 2018", "Apr 2019"],
        "* Launched a mobile app with __OpenGL__ / __libGDX__, __Java__ / __Android__ and __React Native__\n* Created product specifications, hired and managed a team of five frontend and backend developers\n* Passed the first Venture Kick stage raising CHF 10k, gained entrepreneurial insights into company founding, business planning, intellectual property, accounting and strategic decision-making"
      ),
      cvChild(
        "Mobile App Developer (side job)",
        ["nextron internet team · Part-time", "Basel, Switzerland"],
        ["Sep 2017", "Aug 2018"],
        "* Developed and released a cross-platform mobile app with __React Native__ leading to 2,000+ downloads and 5-star rating"
      ),
      cvChild(
        "System Control Engineer, Intern",
        ["Rapyuta Robotics · Full-time", "Zurich, Switzerland / Tokyo, Japan"],
        ["Mar 2016", "Feb 2017"],
        "* Sped up a __Python__ / __NumPy__ model-simulation-framework by __550%__ with the creation of <a href='https://github.com/orestis-z/pyjet' target='_blank'>PyJet</a>\n* Designed energy estimators for a multicopter with Kalman Filters (EKF) using __Python__,  __SciPy__ and __C++__ \n* Improved a setpoint tracking controller and conducted sensor tests for a multicopter using __C++__ and __Python__\n * Leveraged additional knowledge in __ROS__, __Linux__, __Bash__ scripting, __Git__ and authentication servers"
      ),
    ],
  },

  {
    title: "Education",
    children: [
      cvChild(
        "Imperial College London",
        ["Master's Thesis Exchange", "London, United Kingdom"],
        ["Aug 2018", "Jun 2019"],
        "* Pioneered a multi-task CNN deep learning architecture that predicts object instances, human poses, instance masks and tracks people end-to-end\n* Implemented the CNN using __Caffe2__ and __Python__ including custom operators with __CUDA C/C++__"
      ),
      cvChild(
        "ETH Zurich",
        ["MSc Robotics, Systems & Control (5.25/6.0)", "Zurich, Switzerland"],
        ["Feb 2017", "Jun 2019"],
        "Semester thesis (5.75/6.0):\n* Showed that an additional depth input channel improves the instance segmentation accuracy of Mask R-CNN by up to __31%__\n* Submitted the paper to CoRL 2018 and leveraged knowledge in __TensorFlow__, __Keras__, __OpenCV__ and __Python__"
      ),
      cvChild(
        "ETH Zurich",
        ["BSc Mechanical Engineering (5.51/6.0)", "Zurich, Switzerland"],
        ["Sep 2012", "Feb 2016"],
        "Bachelor’s thesis (5.75/6.0):\n* Synthesised non-linear attitude control algorithms and a Kalman filter using __C++__ and __MATLAB__ / __Simulink__"
      ),
    ],
  },

  {
    title: "Software Projects",
    children: [
      cvChild(
        "PyJET – compiling NumPy",
        null,
        null,
        "* Achieved an up to __55x__ speedup of __Python__ code by converting __NumPy__ operations to performant __C++__\n * Co-authored and open-sourced the Python package <a href='https://github.com/orestis-z/pyjet'>PyJET</a>"
      ),
      // cvChild(
      //   "Personal Website",
      //   null,
      //   null,
      //   "* Published my professional website with __React.js__ / __Next.js__ and __AWS__ Lambda on <a href='https://leanmind.ch'>www.leanmind.ch</a> (German)"
      // ),
      cvChild(
        "Mobile Apps",
        null,
        null,
        "* Created multiple mini mobile apps with __React Native__ and __Cordova__ published them on the <a href='https://play.google.com/store/apps/developer?id=LeanMind'>Google Play Store</a>"
      ),
      cvChild(
        "Resume Compiler",
        null,
        null,
        "* Open-sourced a resume compiler using __Node.js__ at <a href='https://github.com/orestis-z/resume-compiler'>github.com/orestis-z/resume-compiler</a>"
      ),
    ],
  },
  {
    mini: true,
    title: "Other",
    children: [
      // cvChild(
      //   "Skills",
      //   [
      //     "Python",
      //     "C++",
      //     "Computer Vision",
      //     "Deep Learning",
      //     "Program Optimization",
      //     "Parallel Computing",
      //     "TensorFlow",
      //     "Keras",
      //     "Caffe2",
      //     "CUDA C/C++",
      //     "OpenGL",
      //     "NumPY",
      //     "SciPy",
      //     "scikit-learn",
      //     "Java",
      //     "AWS",
      //     "SQL",
      //   ],
      //   null
      // ),
      cvChild(
        "Languages",
        [
          "German (mother tongue)",
          "Greek (mother tongue)",
          "English (fluent)",
          "French (intermediate)",
          "Spanish (beginner)",
          "Italian (beginner)",
        ],
        null
      ),
      cvChild(
        "Hobbies",
        ["Rock climbing", "Saxophone", "Programming", "Traveling"],
        null
      ),
    ],
  },
];
