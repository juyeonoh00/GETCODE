import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react";
import { GET } from "./axios";

/** ------------------------------------------------------------- */
/** 소셜로그인 사용자 인증 상태 관리 */ //OAuth사용을 위한 서버리스 API라우트
/** ------------------------------------------------------------- */
/**[TODO]
 * [1] 소셜로그인 사용 시 재가공 필요
 */

const UserInfo = async (req: NextApiRequest, res: NextApiResponse)=>{
    try{
        const session = await getSession({req});

        if(session && session.user?.accessToken){
            const token = session.user.accessToken as string;

            const response = await GET('/api/',{
                headers: {
                    // Authorization: `Bearer ${token}`,
                    Authorization: localStorage.getItem(`Bearer ${token}`),
                    // Authorization: localStorage.getItem(`token`),
                    //로그인 됐을 때 AccessToken 로컬스토리지에 저장. 이건 전역이니까 
                },
            });

            const userInfo = response.data;

            res.status(200).json(userInfo);
        }
        else{
            res.status(401).json({messege: 'UnAuthorized'});
        }
    }
    catch(err){
        console.error('에러 발생:',err);
        res.status(500).json({messege: 'Internal Server Error'})
    }
}
export default UserInfo;