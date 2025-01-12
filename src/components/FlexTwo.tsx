
const FlexTwo = () => {
  const deadlines = [
    {
      date: "JAN 02",
      title: "New Mexico Severe Storm and Flooding",
      code: "4843-DR-NM",
    },
    {
      date: "JAN 07",
      title: "Florida Hurricane Milton",
      code: "4834-DR-FL",
    },
    {
      date: "JAN 07",
      title: "Tennessee Tropical Storm Helene",
      code: "4832-DR-TN",
    },
    {
      date: "JAN 07",
      title: "Florida Hurricane Helene",
      code: "4828-DR-FL",
    },
    {
      date: "JAN 28",
      title: "South Carolina Hurricane Helene",
      code: "4829-DR-SC",
    },
    {
      date: "JAN 31",
      title: "New York Severe Storm and Flooding",
      code: "4818-DR-NY",
    },
  ];

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 mx-2 my-2">
      <h1 className="text-xl font-bold">APPLICATION DEADLINES</h1>
      <p className="text-sm text-gray-600 mt-2">
        FEMA deadlines to apply for the disasters in this list. Disasters with
        past dates may be open for late applications.
      </p>
      <div className="mt-4">
        {deadlines.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-b border-gray-200 py-4"
          >
            <div className="w-20 text-center font-bold text-lg text-gray-800">
              {item.date.split(" ")[0]}
              <br />
              <span className="text-xl">{item.date.split(" ")[1]}</span>
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.code}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexTwo;
