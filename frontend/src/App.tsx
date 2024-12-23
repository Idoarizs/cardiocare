import { useState } from "react";
import { motion } from "framer-motion";

import {
  Header,
  WarningSection,
  IntroductionSection,
  EducationSection,
  RiskFactorsSection,
  PreventionSection,
  CtaSection,
  HeartDiseaseForm,
  Footer,
} from "./components";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalToggle = (): void => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto flex flex-col gap-10 px-5">
        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <WarningSection />
        </motion.section>

        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <IntroductionSection />
        </motion.section>

        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <EducationSection />
        </motion.section>

        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <RiskFactorsSection />
        </motion.section>

        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <PreventionSection />
        </motion.section>

        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <CtaSection handleModalToggle={handleModalToggle} />
        </motion.section>
      </main>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-10 rounded-lg max-w-md w-full max-h-screen overflow-hidden"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 0.95,
              opacity: 0,
              transition: { type: "spring", stiffness: 300, damping: 25 },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            <h3 className="text-2xl font-bold">
              Assess Your Heart Disease Risk
            </h3>
            <p className="text-lg text-gray-800 mb-6">
              Answer the questions below to estimate your heart disease risk.
            </p>
            <HeartDiseaseForm onClose={handleModalToggle} />
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
};

export default App;
