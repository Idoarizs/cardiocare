const Education = () => {
  return (
    <section className="border-2 border-black p-10 rounded-md bg-black text-white">
      <div className="flex flex-wrap gap-10">
        <div className="flex-1">
          <h3 className="text-xl font-bold">What is Heart Disease?</h3>
          <p className="mt-4 text-justify">
            Heart disease refers to a range of conditions that affect the heart,
            including blood vessel diseases, heart rhythm problems, and
            congenital heart defects. It is essential to understand the
            different types of heart disease and how they can impact your
            health.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">Prevention Tips</h3>
          <ul className="mt-4 list-disc list-inside">
            <li>Maintain a healthy diet rich in fruits and vegetables.</li>
            <li>Engage in regular physical activity.</li>
            <li>Avoid smoking and excessive alcohol consumption.</li>
            <li>Manage stress effectively and get enough sleep.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
