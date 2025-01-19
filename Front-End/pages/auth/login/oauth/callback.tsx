import Header from "@/components/common/layout/fixedLayout/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

// 임시 작성
const CallbackGoogle = () =>{
    const router = useRouter();
    const { data: session, status} = useSession();

    useEffect(()=>{
        if(session){
            router.push('/auth/signup/nickname');
        }
    },[])
    return(
        <div>
            <Header></Header>
        </div>
    )
};

export default CallbackGoogle;