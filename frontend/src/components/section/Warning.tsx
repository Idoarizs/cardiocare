import { motion } from "framer-motion";

const Warning = () => {
  return (
    <motion.section
      className="bg-yellow-100 text-black p-6 rounded-md mt-10"
      animate={{
        y: ["0", "-15px", "0"],
      }}
      transition={{
        y: {
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    >
      <h3 className="text-xl font-bold">Important Notice</h3>
      <p className="text-justify">
        While CardioCare offers insights into heart disease risk based on AI
        models and user data, please note that these predictions are not a
        substitute for professional medical advice. Our tool provides a general
        overview but cannot diagnose or treat any health conditions. Always
        consult your healthcare provider for accurate medical guidance.
      </p>
      <ul className="mt-5 list-disc list-inside">
        <li>
          This project focuses on integrating AI into the web to provide an
          initial overview of heart disease risk.
        </li>
        <li>
          The predictions made by this AI should not be considered medical
          advice!
        </li>
        <li>
          CardioCare is not a medical diagnostic tool. The predictions displayed
          are based solely on the AI model and the data entered by the user.
        </li>
        <li>
          Please consult your doctor or a healthcare professional for accurate
          diagnosis and treatment.
        </li>
      </ul>
    </motion.section>
  );
};

export default Warning;
