import { useEffect, useState } from "react";
import styled from "styled-components";

interface ToastProps{
    iconSVG: React.ReactNode;
    notice: string;
    duration?: number;
}

const Toast = ({iconSVG, notice, duration}:ToastProps) => {

    const [durationMSec, setDurationMSec] = useState<number>(1500);
    const [isToastOn, setIsToastOn] = useState<boolean>(true);

    useEffect(()=>{
        if(duration){
            setDurationMSec(duration);
        }

        const timer = setTimeout(()=>{
            setIsToastOn(false);
        }, durationMSec);

        return ()=> clearTimeout(timer);
    },[durationMSec]);

    if (!isToastOn) return null;

    

    return(
    <Layout>
        <Icon>{iconSVG}</Icon>
        <Notice>{notice}</Notice>
    </Layout>
   ) 
}
export default Toast;

const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* min-width: 220px; */
    min-height: 40px;
    padding: 0 10px;

    background-color: #FF993A;
    border-radius: 100px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
`;
const Notice = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;

    color: #fff;
    font-size: 0.9375rem;
`;