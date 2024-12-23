import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAppleAlt, FaRunning, FaSmoking, FaHeartbeat, FaSmile } from "react-icons/fa";

interface RiskFactor {
  title: string;
  detail: string;
  icon: React.ReactNode;
}

const RiskFactors: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const riskFactors: RiskFactor[] = [
    {
      title: "Unhealthy Diet",
      detail: "Consuming high-fat, high-sodium, and processed foods.",
      icon: <FaAppleAlt className="text-red-500" />,
    },
    {
      title: "Physical Inactivity",
      detail:
        "Lack of regular exercise can contribute to weight gain, high blood pressure, and cholesterol.",
      icon: <FaRunning className="text-blue-500" />,
    },
    {
      title: "Smoking",
      detail:
        "Smoking damages your blood vessels, increasing your risk for heart disease.",
      icon: <FaSmoking className="text-gray-500" />,
    },
    {
      title: "High Blood Pressure and Cholesterol",
      detail:
        "These conditions silently damage your arteries and increase your risk of heart attack or stroke.",
      icon: <FaHeartbeat className="text-purple-500" />,
    },
    {
      title: "Stress",
      detail:
        "Chronic stress can affect your heart by raising blood pressure and contributing to unhealthy habits.",
      icon: <FaSmile className="text-yellow-500" />,
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 text-black p-6 rounded-md mt-10">
      <h3 className="text-2xl font-bold mb-4">
        Top Risk Factors for Heart Disease
      </h3>
      <p className="text-gray-700 mb-6">
        Understanding the major risk factors for heart disease is crucial for
        prevention and maintaining a healthy lifestyle. Below are some key
        factors that can significantly impact your heart health.
      </p>
      <div className="space-y-4">
        {riskFactors.map((factor, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleExpand(index)}
              className="flex items-center w-full text-left focus:outline-none"
            >
              {factor.icon}
              <span className="ml-3 font-semibold text-lg">{factor.title}</span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                expandedIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              className="overflow-hidden"
            >
              <p className="mt-2 text-sm text-gray-700">{factor.detail}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RiskFactors;
