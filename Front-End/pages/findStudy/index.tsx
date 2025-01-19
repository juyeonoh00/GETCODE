import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import FindStudyPage from "@/components/findStudy/FindStudyPage";

export default function FindStudy() {
  return (
    <div>
      <FixedLayout menuClicked={3}>
        <FindStudyPage />
      </FixedLayout>
    </div>
  );
}
