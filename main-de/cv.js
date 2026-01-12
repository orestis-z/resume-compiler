import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  address: "CH-4103 Bottmingen",
  phone: "0786373591",
  email: "[info@orestis.ch](mailto:info@orestis.ch)",
  permit: "Schweizer Bürger / Einwohner",
  programmingLanguages:
    "[Portfolio](https://orestis.ch/portfolio) | [GitHub](https://github.com/orestis-z) | [LinkedIn](https://linkedin.com/in/orestis-z)\n\nDeep Learning, Computer Vision,<br>Software Engineering, Robotics",
};

export default [
  {
    title: "Berufserfahrung",
    children: [
      cvChild({
        title: "Senior ML Engineer / Tech Lead",
        subtitles: ["QSC (übernommen von Acuity Brands)", "Zürich", "Remote"],
        date: "Jul 2023 - Heute",
        body: "* " + [
          "**Befördert zum ML Tech Lead im Dez. 2024**, Leitung der Inferenz-Strategie, Architektur, Optimierung und Team von 3 Personen.",
          "Umstellung der Einprozess-Architektur auf eine stufenparallele Pipeline, __Verdoppelung__ des Durchsatzes und Verbesserung der Skalierbarkeit.",
          "Portierung von Vision-ML-Modellen auf TensorRT und DALI, __Verdreifachung__ der Geschwindigkeit und Reduktion der VRAM-Nutzung um __15%.__",
          "Erhöhung der Systemgeschwindigkeit um __30%__ auf ressourcenbeschränkter Hardware durch Batch-Inferenz-Implementierung.",
          "Leitung von CV/ML-Prototyping in Detektion, Tracking, Embeddings und VLMs mit State-of-the-Art-Methoden.",
          "Technologien: __TensorRT__, __ONNX__, __Weights & Biases__, __Grafana__, __ROS__, __Docker__, __GCP__, __PyTorch__, __Python__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "ML Engineer",
        subtitles: [
          "Seervision (ETH Spin-off, übernommen von QSC)",
          "Zürich",
          "Remote",
        ],
        date: "Aug 2021 - Jul 2023",
        body: "* " + [
          "Optimierung der Echtzeit-Detektions-Pipeline, Reduktion der Latenz um __24%__, VRAM um __45%__ und Erhöhung der Genauigkeit um __10%__.",
          "Design, Prototyping, Tuning und Deployment eines Gesichtserkennungssystems mit einer Falscherkennungsrate unter __5%__.",
          "Vorantreiben der Echtzeit-Inferenz-Optimierung, __Verdreifachung__ der Anzahl unterstützter Clients pro Hardware-Einheit.",
          "Zusammenarbeit mit dem Produktteam zum Prototyping und Experimentieren mit CV/ML-Systemen für neuartige Benutzererfahrungen.",
          "Technologien: __ROS__, __OpenCV__, __CUDA__, __PyTorch__, __TensorFlow__, __Docker__, __GitLab CI/CD__, __GCP__, __Python__, __C++__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "ML Infrastructure Engineer ",
        subtitles: [
          "benshi.ai (finanziert von BMGF)",
          "Barcelona",
          "Hybrid",
        ],
        date: "Nov 2020 - Jun 2021",
        body: "* " + [
          "Aufbau einer Cloud-Infrastruktur für umfangreiche ETL-Pipelines, Datenanalyse und Machine-Learning-Anwendungen.",
          "Technologien: __Databricks__, __PySpark__, __MLflow__, __Docker__, __Kubernetes__, __Azure__, __GitHub Actions__, __Pandas__, __Python__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Full-Stack Machine Learning Engineer",
        subtitles: ["Selbständig"],
        date: "Feb 2019 - Mär 2020",
        body: "* " + [
          "Entwicklung eines CNN-basierten Gesichtsprädiktors mit __18%__ Genauigkeitsverbesserung, optimiert für niedrige Latenz.",
          "Entwicklung einer Full-Stack-Anwendung mit plattformübergreifendem Frontend und Microservice-basierter Cloud-Architektur.",
          "Technologien: __AWS__, __React__, __Flask__, __PostgreSQL__, __TensorFlow__, __scikit-learn__, __Python__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Control Systems Engineer, Praktikant",
        subtitles: ["Rapyuta Robotics (ETH Spin-off)", "Tokio", "Vor Ort"],
        date: "Mär 2016 - Feb 2017",
        body: "* " + [
          "Erreichen einer __55-fachen Beschleunigung__ NumPy-intensiver Simulationsiterationen und Open-Sourcing des Python-Pakets <a href='https://github.com/wolfv/pyjet' target='_blank'>PyJet</a>.",
          "Design von Energie-Estimatoren mittels Kalman-Filter, Verbesserung des Tracking-Controllers und Durchführung von Sensor-Tests.",
          "Technologien: __ROS__, __NumPy__, __SciPy__, __Python__, __C++__.",
        ].join("\n* "),
      }),
    ],
  },
  {
    title: "Ausbildung",
    children: [
      cvChild({
        title: "MSc Robotics, Systems & Control",
        subtitles: ["5.25/6.0", "ETH", "Zürich"],
        date: "2017 - 2019",
        body: "* " + [
          "Entwicklung einer Online-Deep-Learning-Architektur für Objektinstanz-Prädiktion, Pose-Estimation und Tracking.",
          "Nachweis, dass ein zusätzlicher Tiefeneingangskanal die Segmentierungsgenauigkeit von Mask R-CNN um __31%__ verbessert.",
          "Technologien: __TensorFlow__, __Keras__, __Caffe2__, __OpenCV__, __CUDA C/C++__, __Python__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "BSc Maschinenbau",
        subtitles: ["5.51/6.0", "ETH", "Zürich"],
        date: "2012 - 2016",
        body: "* " + [
          "Entwicklung von Balancierungs-Algorithmen für einen 6DoF [Omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) mittels nichtlinearer Regelungsmethoden.",
          "Technologien: __MATLAB__, __Simulink__, __C++__.",
        ].join("\n* "),
      }),
    ],
  },
  {
    title: "Projekte",
    mini: true,
    children: [
      cvChild({
        title: "[Shop Automation](https://orestis.ch/blog/automating-beach-rental-store)",
        date: "2023 - 2025",
        body:
          "Self-Service-IoT-System entwickelt mit __Flask__, __Stripe__, __Shopify__, __RasPi__, __RS-485__.",
      }),
      cvChild({
        title: "[Trap the Cat](https://play.google.com/store/apps/details/Chat_Noir_Hexagon?id=com.kima.chatnoirhex)",
        date: "2023 - 2024",
        body:
          "Mobile App entwickelt mit __JavaScript__, __CapacitorJS__ und __Firebase__, mit __100k+__ Downloads.",
      }),
      cvChild({
        title: "[Machine Dreams](https://orestisz.com/machinedreams/)",
        date: "2022",
        body:
          "Experimentelle Fusion von __KI__ und digitaler Kunst mittels __GANs__, Erstellung surrealer NFT-Kunstwerke.",
      }),
      cvChild({
        title: "[Anti CryptoPunks](https://orestisz.com/anticryptopunks)",
        date: "2022",
        body:
          "NFT-Projekt auf der __Polygon__-Blockchain, mit __6 ETH__ Handelsvolumen.",
      }),
      cvChild({
        title: "[PyJet](https://github.com/wolfv/pyjet)",
        date: "2015",
        body:
          "Python-Bibliothek zur Umwandlung von __Python/NumPy__-Operationen in __C++__, Erreichen einer __55-fachen__ Beschleunigung.",
      }),
    ],
  },
];
