export const LeadershipProfilesRowSection = (): JSX.Element => {
  const profiles = [
    {
      id: 1,
      name: "Pankaj Kathane",
      title: "Founder & Managing Director",
      imageType: "img",
      imgSrc:
        "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2@2x.png",
      imgAlt: "Chatgpt image apr",
      imgClass: "absolute top-0 left-px w-[266px] h-[252px] aspect-[1.06]",
      containerH: "h-[252px]",
      gradientClass:
        "absolute top-[45px] left-px w-[266px] h-[206px] rounded-[16px_16px_0px_0px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(4,72,147,1)_0%,rgba(5,27,48,1)_100%)]",
      nameClass:
        "relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[30px]",
      titleClass:
        "relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6",
    },
    {
      id: 2,
      name: "Dr. Arpita Kathane",
      title: "Director & Chief Operating Officer",
      imageType: "bg",
      bgSrc: "https://c.animaapp.com/8QzYMMFv/img/image@2x.png",
      imgAlt: "Dr. Arpita Kathane",
      containerH: "h-[251.68px]",
      gradientClass:
        "absolute top-[45px] left-px w-[266px] h-[206px] rounded-[16px_16px_0px_0px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(4,72,147,1)_0%,rgba(5,27,48,1)_100%)]",
      nameClass:
        "relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[30px]",
      titleClass:
        "relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6",
    },
    {
      id: 3,
      name: "Dr.M.C.Dileep Kumar",
      title: "Advisor",
      imageType: "img",
      imgSrc:
        "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-1@2x.png",
      imgAlt: "Chatgpt image apr",
      imgClass: "absolute top-0 left-px w-[266px] h-[252px] aspect-[1.06]",
      containerH: "h-[252px]",
      gradientClass:
        "absolute top-[45px] left-px w-[266px] h-[206px] rounded-[16px_16px_0px_0px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(4,72,147,1)_0%,rgba(5,27,48,1)_100%)]",
      nameClass:
        "mr-[-6.84px] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[30px] whitespace-nowrap",
      titleClass:
        "relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6",
    },
    {
      id: 4,
      name: "Dr. Gajanan Gulhane",
      title: "Advisor",
      imageType: "img",
      imgSrc:
        "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-2@2x.png",
      imgAlt: "Chatgpt image apr",
      imgClass: "absolute top-0 left-px w-[266px] h-[252px] aspect-[1.06]",
      containerH: "h-[252px]",
      gradientClass:
        "top-[45px] left-0 w-[266px] h-[206px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(4,72,147,1)_0%,rgba(5,27,48,1)_100%)] absolute rounded-[16px_16px_0px_0px]",
      nameClass:
        "mr-[-1.84px] relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[30px] whitespace-nowrap",
      titleClass:
        "relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6",
    },
    {
      id: 5,
      name: "Dr. Sanjayan T. S.",
      title: "Director, Global Alliance",
      imageType: "img",
      imgSrc:
        "https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-3@2x.png",
      imgAlt: "Chatgpt image apr",
      imgClass: "absolute top-0 left-px w-[266px] h-[252px] aspect-[1.06]",
      containerH: "h-[252px]",
      gradientClass:
        "absolute top-[45px] left-px w-[266px] h-[206px] rounded-[16px_16px_0px_0px] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(4,72,147,1)_0%,rgba(5,27,48,1)_100%)]",
      nameClass:
        "relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[30px]",
      titleClass:
        "relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6",
    },
  ];

  const socialIcons = [
    {
      alt: "Social icon",
      src: "https://c.animaapp.com/8QzYMMFv/img/social-icon-26.png",
    },
    { alt: "Vector", src: "https://c.animaapp.com/8QzYMMFv/img/vector-13.png" },
    {
      alt: "Social icon",
      src: "https://c.animaapp.com/8QzYMMFv/img/social-icon-27.png",
    },
  ];

  return (
    <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="flex flex-col w-[266.16px] items-start relative"
        >
          <div className={`relative w-[266.16px] ${profile.containerH}`}>
            <div className={profile.gradientClass} />
            {profile.imageType === "img" ? (
              <img
                className={profile.imgClass}
                alt={profile.imgAlt}
                src={profile.imgSrc}
              />
            ) : (
              <div
                className="top-0 left-[13px] w-[241px] h-[248px] bg-cover bg-[50%_50%] absolute rounded-[16px_16px_0px_0px]"
                style={{ backgroundImage: `url(${profile.bgSrc})` }}
              />
            )}
          </div>
          <div className="flex flex-col items-start gap-4 p-4 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[0px_0px_3px_3px]">
            <div className="flex flex-col items-start justify-center gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
              <div className={profile.nameClass}>{profile.name}</div>
              <div className={profile.titleClass}>{profile.title}</div>
            </div>
            <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  className="relative w-[18px] h-[18px] aspect-[1]"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
