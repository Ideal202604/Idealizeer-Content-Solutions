import { DepartmentLeadProfilesRowSection } from "./sections/DepartmentLeadProfilesRowSection";
import { LeadershipProfilesRowSection } from "./sections/LeadershipProfilesRowSection";
import { TechnicalLeadsProfilesRowSection } from "./sections/TechnicalLeadsProfilesRowSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div
      className="w-full min-w-[1426.8px] min-h-[1325px] flex justify-center"
      data-model-id="53:234"
    >
      <div className="flex w-[1426.8px] h-[1325px] relative flex-col items-center gap-16">
        <LeadershipProfilesRowSection />
        <DepartmentLeadProfilesRowSection />
        <TechnicalLeadsProfilesRowSection />
      </div>
    </div>
  );
};
