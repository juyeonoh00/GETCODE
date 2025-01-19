import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";
import { useEffect, useState } from "react";
import { SubjectData, TechStackData } from "@/components/common/objectAllData/SearchToggleData";

/** ------------------------------------------------------------- */
/** 프로젝트 목록 페이지 컴포넌트 */ //검색단(메인컴포넌트의children)
/** ------------------------------------------------------------- */
// 기술스택(다중선택), 주제(단일선택), 년도(단일선택)

const ProjectPage = () => {

    /** 상세 검색 항목 리스트 */
    const [stackDataArray, setStackDataArray] = useState<any[]>([]);
    const [subjectDataArray, setSubjectDataArray] = useState<any>();
    const yearDataArray: string[] = ['전체', '2020', '2021', '2022', '2023', '2024'];

    /** 현재 선택된 상세 검색 항목(마지막으로 선택된 항목) */
    const [currentSelectedStack, setCurrentSelectedStack]=useState<string>('전체');
    const [currentSelectedSubject, setCurrentSelectedSubject]=useState<string>('전체');
    const [currentSelectedYear, setCurrentSelectedYear]=useState<string>('전체');
    /** 현재 선택된 상세 검색 항목(총 선택된 항목) - 다중선택토글폼에만 해당 */
    const [selectedStackAll,setSelectedStackAll]=useState<string[]>([]);

    /** 검색하기에 반영될 선택된 토글 항목들 */
    const [detailSearchSelectedData, setDetailSearchSelectedData]=useState<any[]>([]);

    /** 최종 선택 된 검색 토글 항목들 */
    useEffect(() =>{
      let tumpArray:any[] = [{
        stack:selectedStackAll,
        subject:currentSelectedSubject,
        year:currentSelectedYear
      }];
      setDetailSearchSelectedData(tumpArray);
    },[currentSelectedStack,currentSelectedSubject,currentSelectedYear]);

    /** 상세 검색 토글 리스트 데이터 불러오기 */
    useEffect(()=>{
      TechStackData({setData:setStackDataArray});
      SubjectData({setData:setSubjectDataArray});
    },[TechStackData,SubjectData]);

    return(
      <MainContantsLayout
            pageName="project"
            title="프로젝트"
            detailSearchSelectedData={detailSearchSelectedData}
      >
        <MultipleSelectToggle title="기술 스택" data={stackDataArray}
            currentSelected={currentSelectedStack}
            setCurrentSelected={setCurrentSelectedStack}
            selectedAll={selectedStackAll}
            setSelectedAll={setSelectedStackAll}
        />
        <SingleSelectToggle title="주제" data={subjectDataArray}
            currentSelected={currentSelectedSubject}
            setCurrentSelected={setCurrentSelectedSubject}
        />
        <SingleSelectToggle title="연도" data={yearDataArray}
            currentSelected={currentSelectedYear}
            setCurrentSelected={setCurrentSelectedYear}
        />
      </MainContantsLayout>
    )
}
export default ProjectPage;