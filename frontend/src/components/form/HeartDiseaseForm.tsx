import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const questions = [
  { key: "age", question: "What is your age?" },
  { key: "sex", question: "What is your sex? (1 = Male, 0 = Female)" },
  { key: "cp", question: "What is your chest pain type? (0-3)" },
  { key: "trestbps", question: "What is your resting blood pressure?" },
  { key: "chol", question: "What is your cholesterol level?" },
  {
    key: "fbs",
    question: "Is fasting blood sugar > 120 mg/dl? (1 = Yes, 0 = No)",
  },
  { key: "restecg", question: "What is your resting ECG result? (0-2)" },
  { key: "thalach", question: "What is your maximum heart rate achieved?" },
  {
    key: "exang",
    question: "Do you experience exercise-induced angina? (1 = Yes, 0 = No)",
  },
  { key: "oldpeak", question: "What is your oldpeak value?" },
  {
    key: "slope",
    question: "What is the slope of the peak exercise ST segment? (0-2)",
  },
  {
    key: "ca",
    question: "How many major vessels are colored by fluoroscopy? (0-4)",
  },
  {
    key: "thal",
    question:
      "What is your thalassemia type? (1 = Normal, 2 = Fixed defect, 3 = Reversible defect)",
  },
];

const HeartDiseaseForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [questions[currentStep].key]: value,
    }));
    setError(null); // Clear error when the user modifies input
  };

  const handleNext = () => {
    // Check if the current field is empty
    if (!formData[questions[currentStep].key]) {
      setError("Please fill out this field before proceeding.");
      return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Check if any field is empty
    for (const key of Object.keys(formData)) {
      if (!formData[key]) {
        setError("Please fill out all fields before submitting.");
        return;
      }
    }

    try {
      const parsedData = Object.keys(formData).reduce((acc, key) => {
        acc[key] = parseFloat(formData[key]) || 0;
        return acc;
      }, {} as Record<string, number>);

      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        parsedData
      );
      setResult(response.data.prediction);
      setSuggestion(response.data.suggestion);
    } catch (error) {
      console.error("Error during prediction:", error);
      setResult("Error");
      setSuggestion("Unable to process the prediction at this time.");
    }
  };

  const resetForm = () => {
    setFormData({});
    setCurrentStep(0);
    setResult(null);
    setSuggestion(null);
    setError(null);
  };

  return (
    <div className="max-w-xl mx-auto">
      {!result ? (
        <div>
          <motion.div
            key={currentStep}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <p className="text-lg font-medium text-black">
                {questions[currentStep].question}
              </p>
              <input
                type="text"
                value={formData[questions[currentStep].key] || ""}
                onChange={handleChange}
                className="w-full py-2 px-4 mt-2 border-2 rounded-md border-gray-200 hover:border-black transition-all duration-300 ease-in-out"
              />
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
            </div>
          </motion.div>

          <div className="flex justify-between">
            {currentStep > 0 && (
              <button
                onClick={handlePrev}
                className="px-4 py-2 font-semibold border-[1px] border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              >
                Previous
              </button>
            )}

            {currentStep < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-black text-white rounded-md font-semibold"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-black text-white rounded-md font-semibold"
              >
                Predict
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col my-10">
          <h3 className="text-lg font-bold text-center">{result}</h3>
          <p className="text-center text-gray-800">{suggestion}</p>
          <button
            onClick={resetForm}
            className="mt-4 px-6 py-2 bg-black font-semibold text-white rounded-md"
          >
            Predict Again
          </button>
        </div>
      )}

      <div className="text-center mt-4">
        <button
          onClick={onClose}
          className="text-black font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HeartDiseaseForm;
