import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  address: "CH-4103 Bottmingen",
  phone: "+41 78 637 35 91",
  email: "[me@orestisz.com](mailto:me@orestisz.com)",
  programmingLanguages:
    "[github.com/orestis-z](https://github.com/orestis-z)\n\nReact-Native Development, Full-Stack, Distributed Systems, Machine Learning",
};

export default [
  {
    title: "Experience",
    children: [
      cvChild(
        "Web App Developer",
        ["Civil service", "Kantonsspital St.Gallen"],
        ["May 2020", "Jul 2020"],
        "* Developed new features and maintained a web application using __Vue.js__, ensuring quality with end-to-end testing using __TestCafe__\n*  Implemented web analytics and customer feedback tools to measure KPIs, and optimized search results appearance with SEO techniques to improve user engagement"
      ),
      cvChild(
        "Full-Stack Engineer",
        ["Self-employed", "Global (Digital Nomad)"],
        ["Feb 2019", "May 2020"],
        "* Developed and marketed an end-to-end cloud-based AI-powered app, using __TensorFlow__ and __scikit-learn__ to modify and retrain a CNN on a face dataset resulting in an __18%__ improvement in accuracy, and productionized the model for real-time inference\n* Designed cross-platform frontend using __Cordova__, __React Native__, __React.js__, and __Electron__, and deployed scalable microservices to __AWS__ with __Python__/__Flask__, __PostgreSQL__, and proxies"
      ),
      cvChild(
        "Mobile App Developer",
        ["nextron internet team", "Part-time", "Basel, Switzerland"],
        ["Sep 2017", "Aug 2018"],
        "*  Developed a cross-platform mobile app for <a href='https://www.explora.ch/'>explora.ch</a> using __React Native__, significantly improving the platform's mobile adaptation and enhancing the user experience\n* Successfully released the app, which garnered over 2,000 downloads and a 5-star rating"
      ),
      cvChild(
        "Junior Mobile App Developer",
        ["ETH Juniors", "Part-time", "Basel, Switzerland"],
        ["Dec 2016", "Jul 2017"],
        "* Built a React Native mobile app with Firebase, realizing a novel business idea for a private customer and demonstrating cross-platform design and cloud-based proficiency"
      ),
    ],
  },
  {
    title: "Education",
    children: [
      cvChild(
        "ETH Zurich",
        ["MSc Robotics, Systems & Control (5.25/6.0)", "Zurich, Switzerland"],
        ["Feb 2017", "Mar 2019"],
        "Semester thesis (5.75/6.0):\n\n* Introduced a method to boost the scene understanding for robotic systems equipped with RGB-D sensors\n* Showed that an additional depth input channel improves the segmentation accuracy of Mask R-CNN by __31%__\n* Submitted a paper to CoRL 2018 and leveraged knowledge in __TensorFlow__, __Keras__, __OpenCV__ and __Python__"
      ),
      cvChild(
        "ETH Zurich",
        ["BSc Mechanical Engineering (5.51/6.0)", "Zurich, Switzerland"],
        ["Sep 2012", "Feb 2016"],
        "* Graduated with more than two standard deviations above the average (top __5%__)\n\nBachelor’s thesis (5.75/6.0):\n* Implemented balancing manoeuvres for the [Omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) to demonstrate its 6DoF flying versatility\n* Derived the system dynamics, synthesised non-linear attitude control algorithms and a Kalman filter using quaternions, __C++__ and __MATLAB__ / __Simulink__"
      ),
    ],
  },
  {
    title: "Projects",
    children: [
      cvChild(
        "Mobile Apps",
        null,
        null,
        "* Created mobile apps with __React Native__ and __Cordova__, and published them on the <a href='https://play.google.com/store/apps/dev?id=9048439414196271506'>Play Store</a>"
      ),
    ],
  },
];
