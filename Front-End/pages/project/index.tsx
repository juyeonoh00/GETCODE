import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import ProjectPage from "@/components/project/ProjectPage";

const ProjectPost: React.FC = () => {
  return (
    <FixedLayout menuClicked={1}>
      <ProjectPage />
    </FixedLayout>
  );
};

export default ProjectPost;
