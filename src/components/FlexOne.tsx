interface ResourceItemProps {
  title: string;
  description: string;
  link?: string;
  noLink?: boolean;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ title, description, link, noLink }) => (
  <div className="border-b pb-3">
    <h2 className="font-bold">{title}</h2>
    <p className="text-gray-600 text-sm">
      {description}{" "}
      {!noLink && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Learn more
        </a>
      )}
    </p>
  </div>
);

const FlexOne = () => {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-md p-6 mx-2 my-2">
      <h1 className="text-2xl font-bold text-center">Local Resources</h1>
      <p className="text-center text-gray-600 mt-2">
        <span className="font-semibold">Los Angeles</span>{" "}
      </p>
      <hr className="my-4" />
      <div className="space-y-4">
        <ResourceItem
          title="Red Cross Open Shelters"
          description="Locate the nearest open Red Cross shelter."
          link="https://www.redcross.org/get-help/disaster-relief-and-recovery-services/find-an-open-shelter.html"
          noLink={false}
        />
        <ResourceItem
          title="Other Shelters"
          description="Go to the Emergency Shelter page to find shelters in your area."
          link="https://www.ready.gov/shelter"
          noLink
        />
        <ResourceItem
          title="Small Business Administration"
          description="Read the SBA Disaster Assistance page to learn about low-interest disaster loans for businesses and homeowners."
          link="https://www.sba.gov/"
          noLink
        />
        <ResourceItem
          title="Local Agencies"
          description="Find your state's emergency management office for resources and county contacts."
          link="https://www.ready.gov/local-resources"
          noLink
        />
        <ResourceItem
          title="FEMA Disaster Recovery Centers (DRC)"
          description="We couldn't find any DRCs near you right now. Please check back later or use the other links to search for resources."
          noLink
        />
      </div>
    </div>
  );
};


export default FlexOne;