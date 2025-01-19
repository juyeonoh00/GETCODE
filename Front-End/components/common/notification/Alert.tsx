import { useRouter } from "next/router";
import styled from "styled-components";

interface AlertProps{
    setIsAlertOn?: any;
    notice?: React.ReactNode | string;
    yesButtonFC?: () => void;
    noButtonFC?: () => void;
}

const Alert = ({setIsAlertOn, notice, yesButtonFC, noButtonFC}:AlertProps) => {

    const router = useRouter();

    console.log(notice);

    return(
        <BackLayout>
            <Layout>
                <Notice>{notice}</Notice>
                <ButtonWrapper>
                    <Button onClick={yesButtonFC}>확인</Button>
                    <Button onClick={noButtonFC}>취소</Button>
                </ButtonWrapper>
            </Layout>
        </BackLayout>
    )
}

export default Alert;

const d = styled.div``;

const BackLayout = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 1004;

    background-color: #00000070;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    min-height: 100px;
    padding: 20px;

    background-color: #fff;
    border-radius: 16px;
    border: 1px solid #b7b7b7;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Notice = styled.div`
    text-align: center;
    line-height: 25px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 25px;

    background-color: #FF993A;
    border-radius: 6px;

    cursor: pointer;
`;
