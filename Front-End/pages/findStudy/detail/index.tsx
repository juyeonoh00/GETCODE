import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import DetailLayout from "@/components/common/layout/DetailLayout";

const FindStudyDetail = () => {
  return (
    <FixedLayout>
      <DetailLayout pageName="findStudy" pageApi="study" />
    </FixedLayout>
  );
};

export default FindStudyDetail;
