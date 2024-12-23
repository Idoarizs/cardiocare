interface CTAProps {
  handleModalToggle: () => void;
}

const CTA = ({ handleModalToggle }: CTAProps) => {
  return (
    <section className="flex flex-col items-center text-center my-10 gap-5">
      <h2 className="text-2xl font-semibold text-black">
        Ready to Know About Your Heart Health?
      </h2>
      <p className="w-[70%] text-gray-800">
        Take our quick heart disease risk assessment and receive a personalized
        report to understand your heart health better.
      </p>
      <button
        onClick={handleModalToggle}
        className="px-6 py-3 border-[1px] font-semibold border-black text-sm rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
      >
        Assess Now
      </button>
    </section>
  );
};

export default CTA;
