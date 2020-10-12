import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  address: "CH-4103 Bottmingen",
  phone: "+41 78 637 35 91",
  email: "orestis@leanmind.ch",
  github: "github.com/orestis-z",
  // summary:
  //   "MSc ETH robotics engineer with a solid programming background, strong analytical skills and good communication capabilities. I am result driven, pay attention to details and always up to learn new technologies and tools.",
};

export default [
  {
    title: "Experience",
    children: [
      cvChild(
        "Web Application Developer (civil service)",
        ["Kantonsspital St Gallen · Full-time", "St. Gallen, Switzerland"],
        ["May 2020", "Jul 2020"],
        "* Added new features to a frontend website with __Vue.js__ following integration testing with __TestCafe__"
      ),
      cvChild(
        "Full-Stack Developer w/ Machine Learning",
        ["Zambounis Technology · Full-time", "Basel, Switzerland"],
        ["Jul 2019", "May 2020"],
        "* Modified and retrained a CNN with __TensorFlow__ and __scikit-learn__ for facial beauty detection leading to an up to __18%__ higher accuracy compared to the state-of-the-art\n* Developed a cross-platform frontend with a mixture of __Cordova__, __React Native__, __React.js__ and __Electron__ to support mobile, web and desktop apps with one code-base\n* Developed a backend composed of four scalable microservices with __Python__ / __Flask__ and __PostgreSQL__ and deployed it to __AWS__ OpsWorks\n* Generated user leads with blogging, Facebook and Google Ads"
      ),
      cvChild(
        "Co-Founder, Technical Lead",
        ["Kimata Networks · Full-time", "Basel, Switzerland"],
        ["Jan 2018", "Apr 2019"],
        "* Launched a mobile app with __OpenGL__ / __libGDX__, __Java__ / __Android__ and __React Native__\n* Created product specifications, hired and managed a team of five frontend and backend developers\n* Gained entrepreneurial insights into founding a company, business planning, intellectual property, basic accounting, strategic decision making and pivoting\n* Raised CHF 10,000 by passing the first Venture Kick stage"
      ),
      cvChild(
        "Mobile App Developer",
        ["nextron internet team GmbH · Part-time", "Basel, Switzerland"],
        ["Sep 2017", "Aug 2018"],
        "* Developed and released a cross-platform mobile app with __React Native__ leading to 1,000+ downloads and 5 star rating"
      ),
      cvChild(
        "System Control Engineer, Intern",
        ["Rapyuta Robotics · Full-time", "Zurich, Switzerland / Tokyo, Japan"],
        ["Mar 2016", "Feb 2017"],
        "* Designed a state-of-charge battery estimator with an extended Kalman Filter (EKF) using __Python__ and __C++__\n* Sped up a __Python__ / __NumPy__ model-simulation-framework by __550%__ with the creation of <a href='https://github.com/orestis-z/pyjet' target='_blank'>PyJet</a>\n* Created an energy estimator for an arbitrary path followed by a multi-rotor vehicle with __Python__ / __SciPy__\n* Improved a setpoint tracking controller for a multi-rotor vehicle implemented in __C++__\n * Leveraged additional knowledge in __Linux__, __Bash__ scripting and __ROS__"
      ),
    ],
  },
  {
    title: "Education",
    children: [
      cvChild(
        "Imperial College London",
        ["Exchange for Master's Thesis", "London, United Kingdom"],
        ["Aug 2018", "Mar 2019"],
        "* Designed a CNN deep learning architecture that predicts object instances, human poses, instance masks and tracks people\n* Implemented the CNN using __Caffe2__ and __Python__ including custom operators with __CUDA C/C++__"
      ),
      cvChild(
        "ETH Zurich",
        ["MSc Robotics, Systems & Control (5.25/6.0)", "Zurich, Switzerland"],
        ["Feb 2017", "Mar 2019"],
        "Semester thesis (5.75/6.0):\n* Modified an existing Mask R-CNN implementation with __TensorFlow__, __Keras__ and __Python__\n* Showed that an additional depth input channel improves the segmentation accuracy by up to __31%__\n* Submitted the computer vision paper report to CoRL 2018"
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
        "Personal Website",
        null,
        null,
        "* Published my personal website with __React.js__ / __Next.js__ and __AWS__ Lambda on <a href='https://leanmind.ch'>www.leanmind.ch</a> (German)"
      ),
      cvChild(
        "Resume Compiler",
        null,
        null,
        "* Open-sourced a resume compiler using __Node.js__ at <a href='https://github.com/orestis-z/resume-compiler'>github.com/orestis-z/resume-compiler</a>"
      ),
      cvChild(
        "Mobile Apps",
        null,
        null,
        "* Created multiple mini mobile apps with __React Native__ and __Cordova__ published on <a href='https://play.google.com/store/apps/developer?id=LeanMind'>Google Play Store</a>"
      ),
      cvChild(
        "PyJET – compiling NumPy",
        null,
        null,
        "* Sped up __Python__ code by converting __NumPy__ operations to performant __C++__\n * Co-authored and open-sourced the Python package <a href='https://github.com/orestis-z/pyjet'>PyJET</a>"
      ),
    ],
  },
  {
    mini: true,
    title: "Other",
    children: [
      cvChild(
        "Languages",
        [
          "German (mother tongue)",
          "Greek (mother tongue)",
          "English (fluent)",
          "French (intermediate)",
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
