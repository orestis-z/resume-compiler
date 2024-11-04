import { cvChild } from "../utils.js";

export const profile = {
  name: "Orestis Zambounis",
  title: "MSc ETH Robotics Engineer",
  birthdate: "10.7.1991",
  adress: "CH-4103 Bottmingen",
  phone: "+41 78 637 35 91",
  email: "[me@orestisz.com](mailto:me@orestisz.com)",
  permit: "Schweizer Bürger",
  programmingLanguages:
    "[GitHub](https://github.com/orestis-z) [LinkedIn](https://linkedin.com/in/orestis-z)\n\nDeep Learning, Computer Vision,<br>Robotik, Softwareentwicklung",
};
export default [
  {
    title: "Erfahrung",
    children: [
      cvChild({
        title: "Senior Machine Learning Ingenieur",
        subtitles: ["QSC", "Zürich, CH"],
        date: "Juli 2023 - Heute",
        body: "* " + [
          "Vision-ML-Modelle auf ONNX und TensorRT portiert, __Verdreifachung__ der Geschwindigkeit und Reduzierung des VRAM-Verbrauchs um __15%__.",
          "Systemgeschwindigkeit durch Implementierung von Batch-Inferenz um __30%__ erhöht.",
          "Prototyping in CV/ML für Erkennung, Tracking, Embeddings und VLMs mit modernsten Methoden durchgeführt.",
          "ML-Architektur für Modularität und Flexibilität neu gestaltet und technische Schulden abgebaut.",
          "Mitkoordination und Betreuung des ML-Teams, Best Practices durchgesetzt und den Einstellungsprozess geleitet.",
          "Technologien: __Python__, __PyTorch__, __TensorRT__, __ONNX__, __Weights & Biases__, __Grafana__, __ROS__, __Docker__, __GCP__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Machine Learning Ingenieur",
        subtitles: [
          "Seervision (ETHZ Spin-off, übernommen von QSC)",
          "Zürich, CH",
        ],
        date: "Aug. 2021 - Juli 2023",
        body: "* " + [
          "Echtzeit-Objekterkennungspipeline optimiert, Latenz um __24%__ reduziert, VRAM um __45%__ gesenkt und Genauigkeit um __10%__ erhöht.",
          "Gesichtserkennungssystem entworfen, prototypisiert, optimiert und mit einer Fehlerrate unter __5%__ bereitgestellt.",
          "Optimierungen für Inferenz vorangetrieben, __Verdreifachung__ der unterstützten Klienten pro Hardwareeinheit.",
          "Zusammenarbeit mit dem Produktteam zur Prototypenerstellung und Experimentieren mit CV/ML-Systemen.",
          "Technologien: __Python__, __C++__, __PyTorch__, __TensorFlow__, __OpenCV__, __CUDA__, __ROS__, __Docker__, __GitLab CI/CD__, __GCP__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "ML Infrastruktur Ingenieur",
        subtitles: [
          "benshi.ai (finanziert von BMGF)",
          "Barcelona, ES",
        ],
        date: "Nov. 2020 - Juni 2021",
        body: "* " + [
          "Skalierbare ML-Infrastruktur und Datenpipelines, von Datenaufnahme bis zur Bereitstellung, aufgebaut.",
          "Technologien: __Python__, __Pandas__, __PySpark__, __Databricks__, __MLflow__, __Docker__, __Kubernetes__, __Azure__, __GitHub Actions__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Full-Stack ML-Ingenieur",
        subtitles: ["Selbstständig"],
        date: "Feb. 2019 - Mai 2020",
        body: "* " + [
          "CNN-basierte Gesichtsschätzer entwickelt mit einer __18%__ Genauigkeitssteigerung, optimiert für online Inferenz.",
          "Full-Stack-Anwendung mit plattformunabhängigem Frontend und Microservice-Architektur entwickelt.",
          "Technologien: __Python__, __TensorFlow__, __scikit-learn__, __Flask__, __React__, __PostgreSQL__, __AWS__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "Kontrollsystemingenieur, Praktikant",
        subtitles: ["Rapyuta Robotics (ETHZ Spin-off)", "Tokyo, JP"],
        date: "März 2016 - Feb. 2017",
        body: "* " + [
          "__55-fache Beschleunigung__ bei NumPy-intensiven Simulation erreicht und das Paket <a href='https://github.com/wolfv/pyjet' target='_blank'>PyJet</a> veröffentlicht.",
          "Energieabschätzer mit einem Kalman-Filter entwickelt, Kontrollsystem verbessert, und Sensortests durchgeführt.",
          "Technologien: __Python__, __C++__, __NumPy__, __SciPy__, __ROS__.",
        ].join("\n* "),
      }),
    ],
  },
  {
    title: "Ausbildung",
    children: [
      cvChild({
        title: "MSc Robotik, Systeme & Steuerung",
        subtitles: ["5.25/6.0", "ETH", "Zürich, CH"],
        date: "2017 - 2019",
        body: "* " + [
          "Online-Deep-Learning-Architektur für Objektinstanz-, Pose-Schätzung und Tracking entwickelt.",
          "Segmentierungsgenauigkeit von Mask R-CNN um __31%__ verbessert durch einen zusätzlichen Tiefenkanal.",
          "Technologien: __Python__, __CUDA C/C++__, __TensorFlow__, __Keras__, __Caffe2__, __OpenCV__.",
        ].join("\n* "),
      }),
      cvChild({
        title: "BSc Maschinenbau",
        subtitles: ["5.51/6.0", "ETH", "Zürich, CH"],
        date: "2012 - 2016",
        body: "* " + [
          "Entwickelte Balancierungsalgorithmen für den [Omnicopter](https://www.youtube.com/watch?v=sIi80LMLJSY) unter Verwendung nichtlinearer Kontrollmethoden.",
          "Technologien: __C++__, __MATLAB__, __Simulink__.",
        ].join("\n* "),
      }),
    ],
  },
  {
    title: "Projekte",
    mini: true,
    children: [
      cvChild({
        title: "[Beachin' Rentals](https://g.co/kgs/B73qiZx)",
        date: "2023 - Heute",
        body:
          "Selbstbedienungskiosk entwickelt mit __Flask__, __Stripe__, __Shopify__, __RasPi__, __RS-485__.",
      }),
      cvChild({
        title: "[Trap the Cat](https://play.google.com/store/apps/details/Chat_Noir_Hexagon?id=com.kima.chatnoirhex)",
        date: "2023 - 2024",
        body:
          "Mobile App entwickelt mit __JavaScript__, __CapacitorJS__ und __Firebase__, mit __100k+__ Downloads.",
      }),
      cvChild({
        title: "[Anti CryptoPunks](https://anticryptopunks.com)",
        date: "2022",
        body:
          "NFT-Projekt auf der __Polygon__-Blockchain, mit einem Handelsvolumen von __6 ETH__.",
      }),
      cvChild({
        title: "[PyJet](https://github.com/wolfv/pyjet)",
        date: "2015",
        body: "Bibliothek, die __NumPy__-Operationen in __C++__ umwandelt und eine __55-fache__ Beschleunigung erreicht.",
      }),
    ],
  },
];
