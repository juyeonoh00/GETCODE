import FixedLayout from "@/components/common/layout/fixedLayout/FixedLayout";
import FindProjectPostPage from "@/components/findProject/post/FindProjectPostPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const FindProjectPost: React.FC = () => {
  // const {data: session, status} = useSession();
  // const router = useRouter();

  // if(status === 'loading'){
  //   return(
  //     <FixedLayout>
  //       {/** [TODO] 로딩 페이지 UI */}
  //       <div>Loading...</div>
  //     </FixedLayout>
  //   )
  // }
  // if(!session){
  //   router.push('/auth/login');
  // }
  // const handleFeatchUserInfo = async() => {
  //   try{
  //     const response = await fetch('/api/user-info',{
  //       headers: {
  //         Autorization: `Bearer ${session?.user}`,
  //       },
  //     });
  //     if(response.ok){
  //       const userInfo = await response.json();
  //       console.log(userInfo);
  //     }else{
  //       console.error('사용자 정보를 가져올 수 없습니다.');
  //     }
  //   }
  //   catch(error){
  //     console.error('사용자 정보를 가져올 수 없음',error);
  //   }
  // };

  return (
    <FixedLayout>
      <FindProjectPostPage />
    </FixedLayout>
  );
};

export default FindProjectPost;
