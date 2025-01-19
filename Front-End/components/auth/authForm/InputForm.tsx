import { EmailDeleteSVG } from "@/public/SVG/auth";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface InputProps{
    name: string;
    type: string;
    placeholder: string;
    value: any;
    onChange: (value: any) => void;
    validation: boolean|undefined;
    children?:any;
    validationGuide?: string;
}

/** ------------------------------------------------------------- */
/** Auth Input칸 재사용 폼 */
/** ------------------------------------------------------------- */
/**[TODO]
 * [1] Input 폰트 사이즈 확대
 * [2] 유효성 UI
 * [3] 유효성 UI에 다른 X버튼 수정
 * [4] X버튼 기능 추가
 */

const InputForm = ({name,type, placeholder, value, onChange, validation, children, validationGuide}:InputProps) => {

    /** 처음 입력된 value, 입력값 변화 여부 확인 */
    const initialValue = useRef(value);
    const [isChangedValue, setIsChangedValue] = useState<boolean>(false);

    /** 부모 컴포넌트의 onChange 핸들러 호출, 입력값 변화 상태 업데이트 */
    const handleOnChange = (e:any) => {
        onChange(e)
        if (initialValue.current !== e.target.value) {
            setIsChangedValue(true);
        } else {
            setIsChangedValue(false);
        }
    }

    /** 입력값 초기화 버튼 함수 */
    const handleValueReset = () => {
        const fakeEvent = {
            target: {
                value: ''
            }
        }
        onChange(fakeEvent);
        setIsChangedValue(false);
    }

    return (
        <InputWrapper validation={validation} isChangedValue={isChangedValue}>
            <p>{name}</p>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
            />
            { validation||validation===undefined ?
                <>{children}</>
                :
                <>
                <div id='children'>{children}</div>
                <div id='icon' onClick={handleValueReset}>
                    <EmailDeleteSVG/>
                </div>
                <ValidationGuide>{validationGuide}</ValidationGuide>
                </>
            }
        </InputWrapper>
    )
}
export default InputForm;

const InputWrapper = styled.div<{validation:boolean|undefined; isChangedValue:boolean}>`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 8px;

    &>p{
        color: ${({validation,isChangedValue})=>(validation===true||isChangedValue===true||validation===undefined?'#000':'#ff4747')};
        font-size: 1rem;
        font-weight: 500;
    }

    &>input{
        width: 100%;
        height: 45px;
        padding: 10px;
        box-sizing: border-box;

        border-radius: 8px;
        border: ${({validation})=>(validation||validation===undefined?'1px solid #B7B7B7':'2px solid #ff4747')};
        
        color: ${({validation,isChangedValue})=>(validation===true||isChangedValue===true||validation===undefined?'#000':'#ff4747')};

        &:focus{
            border: ${({validation})=>(validation||validation===undefined?'1px solid #FF993A':'2px solid #ff4747')};
            outline: none;
        }
    }
    #icon{
        position: absolute;
        right: 70px;
        top: 37px;

        cursor: pointer;
    }
    #children{
        position: absolute;
        right: 0px;
        
    }
`;

const ValidationGuide = styled.div`
    width: 100%;
    padding: 0 10px;

    color: #ff4747;
    font-size: 0.75rem;
`;