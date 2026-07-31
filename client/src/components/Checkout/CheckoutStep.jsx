const CheckoutSteps = ({ completedSteps }) => {
  const steps = [
    {
      id: 1,
      title: "Shipping",
    },
    {
      id: 2,
      title: "Payment",
    },
    {
      id: 3,
      title: "Review",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {steps.map((step) => (
        <div key={step.id} className="flex items-center gap-4">
          <div
            className={`
h-4 w-4 rounded-full border
flex items-center justify-center

${
  completedSteps[step.title.toLowerCase()]
    ? "bg-black text-white"
    : "border-gray-400"
}

`}
          >
            {completedSteps[step.title.toLowerCase()] ? "✓" : step.id}
          </div>

          <p
            className="
uppercase
tracking-[0.2em]
text-xs
"
          >
            {step.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
