import MainContantsLayout from "@/components/common/layout/MainContantsLayout";
import { MultipleSelectToggle, SingleSelectSidoGugunToggle, SingleSelectToggle } from "@/components/common/search/DetailSearchForm";
import { useEffect, useState } from "react";
import { SidoGugunData } from "@/components/common/objectAllData/SearchToggleData";

interface FindStudyBulletinData{
    title: string;
    content: string;
    region: string;
    recruitment: boolean;
    online: boolean;
    views: number;
}
interface SidoGugun{
    key: number;
    siDo: string;
    guGun: string[];
}

const FindStudyPage = () => {

    /** 상세 검색 항목 리스트 (분야,온/오프라인,지역,모집여부) */
    const onlineStatusDataArray:string[] = ['전체','온라인','오프라인'];
    const [sidoGugunDataArray, setSidoGugunDataArray] = useState<SidoGugun[]>([]);
    const recruitmentStatusDataArray:string[] = ['모집 중','모집 완료','전체'];
    const yearDataArray: string[] = ['전체', '2020', '2021', '2022', '2023', '2024'];
    const [fieldDataArray, setFieldDataArray] = useState<string[]>([]);

    /** 현재 선택된 상세 검색 항목(마지막으로 선택된 항목) */
    const [currentSelectedField, setCurrentSelectedField]=useState<string>('전체');
    const [currentSelectedOnline, setCurrentSelectedOnline]=useState<boolean|string>('전체');
    const [currentSelectedSido, setCurrentSelectedSido]=useState<string>('시/도 선택');
    const [currentSelectedGugun, setCurrentSelectedGugun]=useState<string>('구/군 선택');
    const [currentSelectedRecruitment, setCurrentSelectedRecruitment]=useState<boolean|string>('전체');
    const [currentSelectedYear, setCurrentSelectedYear]=useState<string>('전체');

    /** 현재 선택된 상세 검색 항목(총 선택된 항목) - 다중선택토글폼에만 해당 */
    const [selectedStackAllField,setSelectedStackAllField]=useState<string[]>([]);
    /** 검색하기에 반영될 선택된 토글 항목들 */
    const [detailSearchSelectedData, setDetailSearchSelectedData]=useState<any>();

    /** 검색하기 Props로 전달 */
    useEffect(()=>{
        let tumpArray:any[] = [{
            online: currentSelectedOnline==='온라인'?true:currentSelectedOnline==='오프라인'?false:'',
            siDo: currentSelectedSido,
            guGun: currentSelectedGugun,
            recruitment: currentSelectedRecruitment==='모집 중'?true:currentSelectedRecruitment==='모집 완료'?false:'',
            field: selectedStackAllField,
            year: currentSelectedYear
        }];
        setDetailSearchSelectedData(tumpArray);
    },[currentSelectedField,currentSelectedOnline,currentSelectedRecruitment,currentSelectedSido,currentSelectedGugun,currentSelectedYear]);

    /** 상세 검색 토글 리스트 데이터 불러오기 */
    useEffect(() => {
        //시도,구군 데이터 불러오기
        SidoGugunData({setData:setSidoGugunDataArray});
    },[SidoGugunData]);

    return(
        <MainContantsLayout
            pageName="findStudy"
            title="스터디 모집"
            detailSearchSelectedData={detailSearchSelectedData}
        >
            <MultipleSelectToggle title="스터디 분야" data={fieldDataArray}
                currentSelected={currentSelectedField}
                setCurrentSelected={setCurrentSelectedField}
                selectedAll={selectedStackAllField}
                setSelectedAll={setSelectedStackAllField}
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
export default FindStudyPage;