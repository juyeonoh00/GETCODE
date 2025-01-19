import { ExitIcon, ExitToggleIcon, ToggleIcon } from "@/public/SVG/search";
import { media } from "@/styles/mediaQuery";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props{
    title?: string; //선택 제목(ex-기술스택or주제or연도)
    data?: string[]; //토글전체리스트=상세검색항목리스트(ex-'전체','spring','django',..)
    currentSelected?: any; //마지막으로 선택된 토글
    setCurrentSelected?: any; //마지막으로 선택된 토글()
    selectedAll?: any; //선택된 토글 전체 - 다중선택토글폼
    setSelectedAll?: any; //선택된 토글 전체() - 다중선택토글폼

    sidoGugunData?: any;
    currentSelectedSido?: any; //마지막으로 선택된 시도 토글
    setCurrentSelectedSido?: any; //마지막으로 선택된 시도 토글()
    currentSelectedGugun?: any; //마지막으로 선택된 구군 토글
    setCurrentSelectedGugun?: any; //마지막으로 선택된 구군 토글
}
/** ------------------------------------------------------------- */
// 다중 선택 토글 폼
/** ------------------------------------------------------------- */

export const MultipleSelectToggle = ({title, data, currentSelected, setCurrentSelected, selectedAll, setSelectedAll}:Props) => {

    // 토글전체리스트:상세 검색 항목 리스트 (ex-'전체','spring','django','express')
    const [toggleList, setToggleList] = useState<any>(data??[]);
    // 토글리스트On/Off
    const [isToggleOn, setIsToggleOn]=useState<boolean>(false);

    /** 토글 선택 (ST:SelectedToggle,현재선택된토글) */ 
    const handleSelectedToggle = (ST:string) => {

        //현재선택된토글을 선택된토글리스트에 넣음
        let tumpselectedAll:string[] =[...selectedAll];
        tumpselectedAll.push(ST);
        setSelectedAll(tumpselectedAll);

        //토글리스트OFF
        setIsToggleOn(!isToggleOn);

        //마지막으로선택된토글(현재선택된토글ST)
        setCurrentSelected(ST);

        //토글전체리스트에서 현재선택된토글ST를 제외함
        if(toggleList.includes(ST)){
            let array:any[] = toggleList.filter((item:any)=>item!=ST);
            setToggleList(array);
        }
    };

    /** 토글 선택 취소 (ST:SelectedToggle,현재선택취소된토글) */ 
    const handleUnSelectedToggle = (ST:string) => {

        //토글 전체 리스트에 현재선택취소된토글을 넣음
        let tumpToggleList:any[] = [...toggleList,ST];
        setToggleList(tumpToggleList);

        //선택된토글리스트에서 현재선택취소된토글을 제외함
        let seletedListArray:any[] = selectedAll.filter((item: string)=>item!=ST);
        setSelectedAll(seletedListArray);

        //선택된토글리스트가 아무것도 없다면 현재선택된토글은'전체'로 지정함
        if(seletedListArray.length == 0){
            setCurrentSelected('전체');
        }
    };

    return(
        <BackLayout>
            <Layout>
                <Title>{title}</Title>
                <Contents>
                    <Toggle onClick={()=>setIsToggleOn(!isToggleOn)}>
                        <span>{currentSelected}</span>
                        <ToggleIcon/>
                        <ExitIconWrapper>
                            <ExitIcon/>
                        </ExitIconWrapper>
                        {isToggleOn ?
                            <ToggleListWrapper>
                                {toggleList?.map((i:any, idx:number)=>(
                                    <ToggleList key={idx} onClick={()=>handleSelectedToggle(i)}>{i}</ToggleList>
                                ))}
                            </ToggleListWrapper>
                        : <></>
                        }
                    </Toggle>
                    <SelectedToggleWrapper>
                        {selectedAll?.map((i:any, idx:number)=>(
                            <SelectedToggle key={idx}>
                                {selectedAll[idx]}
                                <div id="exitToggle" onClick={()=>handleUnSelectedToggle(selectedAll[idx])}>
                                    <ExitToggleIcon/>
                                </div>
                            </SelectedToggle>
                        ))}
                    </SelectedToggleWrapper>
                </Contents>
            </Layout>
        </BackLayout>
    )
}

/** ------------------------------------------------------------- */
// 단일 선택 토글 폼
/** ------------------------------------------------------------- */
export const SingleSelectToggle = ({title, data, currentSelected, setCurrentSelected}:Props) => {

    const dataArray:string[] = data??[];
    const [toggleList, setToggleList] = useState<string[]>(dataArray);
    const [isToggleOn, setIsToggleOn]=useState<boolean>(false);

    return(
        <BackLayout>
            <Layout>
                <Title>{title}</Title>
                <Contents>
                    <Toggle onClick={()=>setIsToggleOn(!isToggleOn)}>
                            <span>{currentSelected}</span>
                            <ToggleIcon/>
                            <ExitIconWrapper>
                                <ExitIcon/>
                            </ExitIconWrapper>
                            {isToggleOn ?
                                <ToggleListWrapper>
                                    {toggleList.map((i:any, idx:number)=>(
                                        <ToggleList key={idx} onClick={()=>setCurrentSelected(i)}>{i}</ToggleList>
                                    ))}
                                </ToggleListWrapper>
                            : <></>
                            }
                    </Toggle>
                </Contents>
            </Layout></BackLayout>
    )
}

/** ------------------------------------------------------------- */
// 단일 선택 시도/구군 토글 폼
/** ------------------------------------------------------------- */
export const SingleSelectSidoGugunToggle = ({title, sidoGugunData, currentSelectedSido, setCurrentSelectedSido, currentSelectedGugun, setCurrentSelectedGugun}:Props) => {

    const dataArray:any[] = sidoGugunData??[];

    const [isSidoToggleOn, setIsSidoToggleOn]=useState<boolean>(false);
    const [isGugunToggleOn, setIsGugunToggleOn]=useState<boolean>(false);

    return(
        <BackLayout>
            <Layout className="SidoGugun">
                <Title>{title}</Title>
                <SidoContents>
                    <Toggle id="Sido" onClick={()=>setIsSidoToggleOn(!isSidoToggleOn)}>
                            <span>{currentSelectedSido}</span>
                            <ToggleIcon/>
                            {isSidoToggleOn ?
                                <ToggleListWrapper>
                                    {dataArray.map((i:any, idx:number)=>(
                                        <ToggleList key={idx} onClick={()=>setCurrentSelectedSido(i.siDo)}>{i.siDo}</ToggleList>
                                    ))}
                                </ToggleListWrapper>
                            : <></>
                            }
                    </Toggle>
                </SidoContents>
                <GugunContents>
                    <Toggle id="Gugun" onClick={()=>setIsGugunToggleOn(!isGugunToggleOn)}>
                            <span>{currentSelectedGugun}</span>
                            <ToggleIcon/>
                            <ExitIconWrapper>
                                <ExitIcon/>
                            </ExitIconWrapper>
                            {isGugunToggleOn ?
                                <ToggleListWrapper>
                                    {dataArray.find((item:any)=>item.siDo === currentSelectedSido)?.guGun.map((i:any, idx:number)=>(
                                        <ToggleList key={idx} onClick={()=>setCurrentSelectedGugun(i)}>{i}</ToggleList>
                                    ))}
                                </ToggleListWrapper>
                            : <></>
                            }
                    </Toggle>
                </GugunContents>
            </Layout>
        </BackLayout>
    )
}

const BackLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > .SidoGugun{
        display: flex;
        width: 100%;
        gap: 10px;
    }
`;
const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    flex-wrap: nowrap;
    width: 100%;
    gap: 10px;
    margin-top: 20px;

    ${media.mobile || media.tablet}{
        grid-template-columns: 32% auto;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
    padding: 3px 5px;
    padding-top: 4px;
    white-space: nowrap;

    border-radius: 6px;
    border: 2px solid #ff993a;

    ${media.mobile || media.tablet}{
        width: 100%;
    }
`;

const Contents = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;

const Toggle = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    width: 430px;
    height: 25px;
    padding: 3px 10px;

    border-radius: 6px;
    border: 1px solid #909090;
    background-color: #d9d9d9;

    cursor: pointer;

    ${media.tablet || media.mobile}{
        width: 100%;
    }
`;
const ExitIconWrapper = styled.div`
    display: flex;
    position: absolute;
    right: -25px;

    cursor: pointer;
`;
const ToggleListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top:25px;
    left: 4px;
    z-index: 1000;
    justify-content: start;
    width: 421px;
    max-height: 150px;
    overflow-y: scroll;
    
    background-color: #d9d9d9;

    ${media.tablet || media.mobile}{
        width: 98%;
    }
    `;
const ToggleList = styled.div`
    display: flex;
    height: 25px;
    align-items: center;
    padding: 3px 10px;
    border-bottom: 1px solid #c7c7c7;
    color: #000;
`;

const SelectedToggleWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;

const SelectedToggle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    width: fit-content;
    height: 25px;

    border-radius: 30px;
    border: 1px solid #b1b1b1;
    background-color: #fff;

    & #exitToggle{
        padding-top: 3px;
        cursor: pointer;
    }
`;

const SidoContents = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    gap: 10px;
`;

const GugunContents = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    gap: 10px;
`;