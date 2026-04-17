const profiles = [
  {
    name: "Dr. Chandrani Singh",
    title: "Director, Academics and Research",
    imageType: "img",
    imageSrc:
      "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-4@2x.png",
    imageAlt: "Chatgpt image apr",
    containerWidth: "w-[266.16px]",
    imageContainerWidth: "w-[266.16px]",
    imageContainerMr: "",
    gradientLeft: "left-px",
    gradientWidth: "w-[266px]",
    imageLeft: "left-px",
  },
  {
    name: "Sumit Dorle",
    title: "Senior Manager & business development",
    imageType: "bg",
    imageSrc: "https://c.animaapp.com/8QzYMMFv/img/image-1@2x.png",
    imageAlt: "Sumit Dorle",
    containerWidth: "w-[266.16px]",
    imageContainerWidth: "w-[266.8px]",
    imageContainerMr: "mr-[-0.64px]",
    gradientLeft: "left-px",
    gradientWidth: "w-[266px]",
    imageLeft: "left-0",
  },
  {
    name: "Pankaj Kathane",
    title: "Client Relations & Delivery Manager",
    imageType: "img",
    imageSrc:
      "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-5@2x.png",
    imageAlt: "Chatgpt image apr",
    containerWidth: "w-[266.16px]",
    imageContainerWidth: "w-[266.16px]",
    imageContainerMr: "",
    gradientLeft: "left-px",
    gradientWidth: "w-[266px]",
    imageLeft: "left-px",
  },
  {
    name: "Amol Ghadge",
    title: "Team Lead, Course Development and Marketing",
    imageType: "img",
    imageSrc:
      "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-6@2x.png",
    imageAlt: "Chatgpt image apr",
    containerWidth: "w-[266.16px]",
    imageContainerWidth: "w-[266.16px]",
    imageContainerMr: "",
    gradientLeft: "left-0",
    gradientWidth: "w-[266px]",
    imageLeft: "left-px",
  },
  {
    name: "Madhuri Sheth",
    title: "Academic Content Writer",
    imageType: "img",
    imageSrc:
      "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-7@2x.png",
    imageAlt: "Chatgpt image apr",
    containerWidth: "w-[266.16px]",
    imageContainerWidth: "w-[266.16px]",
    imageContainerMr: "",
    gradientLeft: "left-px",
    gradientWidth: "w-[266px]",
    imageLeft: "left-px",
  },
];

export const DepartmentLeadProfilesRowSection = (): JSX.Element => {
  return (
    <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className={`flex flex-col ${profile.containerWidth} items-start relative`}
        >
          <div
            className={`relative ${profile.imageContainerWidth} h-[252px] ${profile.imageContainerMr}`}
          >
            <div
              className={`absolute top-[45px] ${profile.gradientLeft} ${profile.gradientWidth} h-[206px] rounded-[16px_16px_0px_0px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(4,72,147,1)_0%,rgba(5,27,48,1)_100%)]`}
            />
            {profile.imageType === "img" ? (
              <img
                className={`absolute top-0 ${profile.imageLeft} w-[266px] h-[252px] aspect-[1.06]`}
                alt={profile.imageAlt}
                src={profile.imageSrc}
              />
            ) : (
              <div
                className={`top-0 ${profile.imageLeft} w-[266px] h-[252px] bg-[url(${profile.imageSrc})] bg-cover bg-[50%_50%] absolute rounded-[16px_16px_0px_0px]`}
              />
            )}
          </div>
          <div className="flex flex-col items-start gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[0px_0px_3px_3px]">
            <div className="flex flex-col items-start justify-center gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[30px]">
                {profile.name}
              </div>
              <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                {profile.title}
              </p>
            </div>
            <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="Social icon"
                src="https://c.animaapp.com/8QzYMMFv/img/social-icon-26.png"
              />
              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="Vector"
                src="https://c.animaapp.com/8QzYMMFv/img/vector-13.png"
              />
              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="Social icon"
                src="https://c.animaapp.com/8QzYMMFv/img/social-icon-27.png"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
