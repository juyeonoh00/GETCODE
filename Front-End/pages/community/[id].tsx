import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import CommunityPage from "@/components/community/CommunityPage";
import { useRouter } from "next/router";

const CommunityMain = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <FixedLayout menuClicked={4} id={id}>
      <CommunityPage id={id} />
    </FixedLayout>
  );
};
export default CommunityMain;
