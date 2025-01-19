import Header from "@/components/common/layout/fixedLayout/Header";
import MenuBar from "@/components/common/layout/fixedLayout/MenuBar";
import Footer from "@/components/common/layout/fixedLayout/Footer";
import React from "react";
import styled from "styled-components";

/** ------------------------------------- */
/** 고정 레이아웃(헤더, 메뉴바, 푸터) 통합 컴포넌트 */
/** ------------------------------------- */

interface LayoutProps{
    children: React.ReactNode;
    menuClicked?: number;
    id?: any;
}

const FixedLayout:React.FC<LayoutProps> = ({children, menuClicked, id})=>{
    return(
        <Layout>
            <div style={{ display:"block", height:"100px", zIndex:1004}}>
                <Header/>
                <MenuBar menuClicked={menuClicked} id={id}/>     
            </div>
            <Content>
                {children}
            </Content>
            <Footer />
        </Layout>
    );
}
export default FixedLayout;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1003;
`;

const Content = styled.div`
    display: flex;
    min-height: 100vh;
    
`;