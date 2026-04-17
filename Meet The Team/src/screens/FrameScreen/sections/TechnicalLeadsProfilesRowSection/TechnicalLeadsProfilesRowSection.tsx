const profiles = [
  {
    name: "Vaishnavi Havale",
    role: "Team Lead, Digital Marketing",
    image:
      "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-8@2x.png",
    imageAlt: "Chatgpt image apr",
    leftOffset: "left-px",
  },
  {
    name: "Janbaj Jadhav",
    role: "Team Lead, UI/UX and Tech Development",
    image:
      "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-9@2x.png",
    imageAlt: "Chatgpt image apr",
    leftOffset: "left-px",
  },
  {
    name: "Rutuja Nare",
    role: "Ui Ux Design And Graphic Design",
    image:
      "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-10@2x.png",
    imageAlt: "Chatgpt image apr",
    leftOffset: "left-0",
  },
  {
    name: "Wajid Tamboli",
    role: "Software Developer",
    image:
      "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-11@2x.png",
    imageAlt: "Chatgpt image apr",
    leftOffset: "left-0",
  },
];

export const TechnicalLeadsProfilesRowSection = (): JSX.Element => {
  return (
    <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="flex flex-col w-[266.16px] items-start relative"
        >
          <div className="relative w-[266.16px] h-[252px]">
            <div
              className={`absolute top-[45px] ${profile.leftOffset} w-[266px] h-[206px] rounded-[16px_16px_0px_0px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(4,72,147,1)_0%,rgba(5,27,48,1)_100%)]`}
            />
            <img
              className="absolute top-0 left-px w-[266px] h-[252px] aspect-[1.06]"
              alt={profile.imageAlt}
              src={profile.image}
            />
          </div>
          <div className="flex flex-col items-start gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[0px_0px_3px_3px]">
            <div className="flex flex-col items-start justify-center gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[30px]">
                {profile.name}
              </div>
              <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                {profile.role}
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
