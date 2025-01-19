import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectSidoGugunToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";
import { useEffect, useState } from "react";
import { SidoGugunData, SubjectData, TechStackData } from "@/components/common/objectAllData/SearchToggleData";

/** ------------------------------------------------------------- */
/** 프로젝트 모집 목록 페이지 컴포넌트 */ //검색단(메인컴포넌트의children)
/** ------------------------------------------------------------- */
// 기술스택(다중선택), 주제(단일선택), 온/오프라인(단일선택), 시도/구군(단일2중선택), 모집여부(단일선택), 연도(단일선택)
/**[TODO]
 * [1] 
 */

interface SidoGugun{
    key: number;
    siDo: string;
    guGun: string[];
}
const FindProjectPage = () => {

    /** 상세 검색 항목 리스트 (기술스택,주제,모집파트,모집여부) */
    const [stackDataArray, setStackDataArray] = useState<any>();//다중선택항목
    const [subjectDataArray, setSubjectDataArray] = useState<any>();//모집분야(반응형,웹서비스,앱,게임 등) 대신 주제(단일선택)로 작성
    const onlineStatusDataArray:string[] = ['전체','온라인','오프라인'];
    const [sidoGugunDataArray, setSidoGugunDataArray] = useState<SidoGugun[]>([]);
    const recruitmentStatusDataArray:string[] = ['모집 중','모집 완료','전체'];
    const yearDataArray: string[] = ['전체', '2020', '2021', '2022', '2023', '2024'];
    // const partDataArray:string[] = ['모집파트1','모집파트2','모집파트3','모집파트4','모집파트5'];//모집파트(디자인,프론트엔드,백엔드,기획자,마케터 등) 작성 안함
    // const onlineStatusDataArray:string[] = ['전체','온라인','오프라인','온/오프라인','협의'];//내용 협의 필요

    /** 현재 선택된 상세 검색 항목(마지막으로 선택된 항목) */
    const [currentSelectedStack, setCurrentSelectedStack]=useState<string>('전체');
    const [currentSelectedSubject, setCurrentSelectedSubject]=useState<string>('전체');
    const [currentSelectedOnline, setCurrentSelectedOnline]=useState<boolean|string>('전체');
    const [currentSelectedSido, setCurrentSelectedSido]=useState<string>('시/도 선택');
    const [currentSelectedGugun, setCurrentSelectedGugun]=useState<string>('구/군 선택');
    const [currentSelectedRecruitment, setCurrentSelectedRecruitment]=useState<boolean|string>('전체');
    const [currentSelectedYear, setCurrentSelectedYear]=useState<string>('전체');

    /** 현재 선택된 상세 검색 항목(총 선택된 항목) - 다중선택토글폼에만 해당 */
    const [selectedStackAllStack,setSelectedStackAllStack]=useState<string[]>([]);
    // const [selectedStackAllPart,setSelectedStackAllPart]=useState<string[]>([]);

    /** 검색하기에 반영될 선택된 토글 항목들 */
    const [detailSearchSelectedData, setDetailSearchSelectedData]=useState<any>();
    // 검색하기에 반영될 선택된 토글 반영
    useEffect(() =>{

        // console.log(currentSelectedRecruitment, '모집여부');
        //[TODO: online처럼 바꾸기-코드간결화]
        let currentRecruitment:boolean|string = '';
        if(currentSelectedRecruitment==='모집 중'){
            currentRecruitment = true;
        }
        if(currentSelectedRecruitment==='모집 완료'){
            currentRecruitment = false;
        }

        let tumpArray:any[] = [{
            stack: selectedStackAllStack,
            subject: currentSelectedSubject,
            online: currentSelectedOnline==='온라인'?true:currentSelectedOnline==='오프라인'?false:'',
            siDo: currentSelectedSido,
            guGun: currentSelectedGugun,
            recruitment: currentRecruitment,
            year: currentSelectedYear
        }];
        setDetailSearchSelectedData(tumpArray);
    },[currentSelectedStack,currentSelectedSubject,currentSelectedOnline,currentSelectedSido,currentSelectedGugun,currentSelectedRecruitment,currentSelectedYear]);

    /** 상세 검색 토글 리스트 데이터 불러오기 */
    useEffect(()=>{
        TechStackData({setData:setStackDataArray});
        SubjectData({setData:setSubjectDataArray});
        SidoGugunData({setData:setSidoGugunDataArray});
    },[TechStackData,SubjectData,SidoGugunData]);

    return(
        <MainContantsLayout
            pageName="findProject"
            title="프로젝트 모집"
            detailSearchSelectedData={detailSearchSelectedData}
        >
            <MultipleSelectToggle title="기술 스택" data={stackDataArray}
                currentSelected={currentSelectedStack}
                setCurrentSelected={setCurrentSelectedStack}
                selectedAll={selectedStackAllStack}
                setSelectedAll={setSelectedStackAllStack}
            />
            <SingleSelectToggle title="주제" data={subjectDataArray}
                currentSelected={currentSelectedSubject}
                setCurrentSelected={setCurrentSelectedSubject}
            />
            <SingleSelectToggle title="온/오프라인" data={onlineStatusDataArray}
                currentSelected={currentSelectedOnline}
                setCurrentSelected={setCurrentSelectedOnline}
            />
            <SingleSelectSidoGugunToggle title="지역" sidoGugunData={sidoGugunDataArray}
                currentSelectedSido={currentSelectedSido}
                setCurrentSelectedSido={setCurrentSelectedSido}
                currentSelectedGugun={currentSelectedGugun}
                setCurrentSelectedGugun={setCurrentSelectedGugun}
            />
            <SingleSelectToggle title="모집 여부" data={recruitmentStatusDataArray}
                currentSelected={currentSelectedRecruitment}
                setCurrentSelected={setCurrentSelectedRecruitment}
            />
            <SingleSelectToggle title="연도" data={yearDataArray}
                currentSelected={currentSelectedYear}
                setCurrentSelected={setCurrentSelectedYear}
            />
        </MainContantsLayout>
    )
}
export default FindProjectPage;