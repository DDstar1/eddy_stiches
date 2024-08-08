const steps = [
  {
    id: 1,
    icon: "M9 12h3v3H9zm0-6h3v3H9zm6 6h3v3h-3zm0-6h3v3h-3z",
    color: "bg-blue-500",
    title: "Select Your Item/Service",
    description:
      "Choose the clothing or accessory you need tailored and the specific service required, such as hemming, resizing, or any other alteration.",
  },
  {
    id: 2,
    icon: "M5 13l4 4L19 7",
    color: "bg-green-500",
    title: "Book an Appointment",
    description:
      "Schedule a convenient time for your tailoring service by booking an appointment.",
  },
  {
    id: 3,
    icon: "M12 8v4l2 2M12 16h6m-9 0H4m-1-3h3m-3 0h3m-3 0h3m-3 0h3",
    color: "bg-yellow-500",
    title: "Drop Off Your Item",
    description:
      "Bring your item to the designated location on the day of your appointment.",
  },
  {
    id: 4,
    icon: "M7 10l5 5 5-5",
    color: "bg-red-500",
    title: "Pick Up Your Item",
    description: "Collect your expertly tailored garment on the agreed date.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          How We Operate
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-lg rounded-lg p-6 mb-8 lg:mb-0 lg:w-1/4"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 mb-4 ${step.color} text-white rounded-full`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={step.icon}
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
