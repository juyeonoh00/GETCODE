import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import DetailLayout from "@/components/common/layout/DetailLayout";

const ProjectDetail = () => {
  return (
    <FixedLayout>
      <DetailLayout pageName="project" pageApi="project/detail" />
    </FixedLayout>
  );
};

export default ProjectDetail;
