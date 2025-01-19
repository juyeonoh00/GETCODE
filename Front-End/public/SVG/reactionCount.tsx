/** 좋아요(하트) 버튼 */
export const HartOnSVG = ({size}:any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 30 30" fill="none">
        <path d="M15.9718 26.3103L14.1611 24.742C7.73009 19.1933 3.48438 15.5338 3.48438 11.0426C3.48438 7.38313 6.50633 4.50781 10.3525 4.50781C12.5253 4.50781 14.6107 5.47021 15.9718 6.99104C17.3329 5.47021 19.4183 4.50781 21.5911 4.50781C25.4372 4.50781 28.4592 7.38313 28.4592 11.0426C28.4592 15.5338 24.2135 19.1933 17.7825 24.7538L15.9718 26.3103Z" fill="#FF4D4D" stroke="black"/>
    </svg>
)
export const HartOffSVG = ({size}:any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={String(size)} height={String(size)} viewBox="0 0 30 30" fill="none">
        <path d="M15.9718 26.3103L14.1611 24.742C7.73009 19.1933 3.48438 15.5338 3.48438 11.0426C3.48438 7.38313 6.50633 4.50781 10.3525 4.50781C12.5253 4.50781 14.6107 5.47021 15.9718 6.99104C17.3329 5.47021 19.4183 4.50781 21.5911 4.50781C25.4372 4.50781 28.4592 7.38313 28.4592 11.0426C28.4592 15.5338 24.2135 19.1933 17.7825 24.7538L15.9718 26.3103Z" fill="white" stroke="black"/>
    </svg>
)

/** 조회수(눈모양) */
export const ViewCountSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" stroke="black" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="black" strokeLinecap="round"/>
    </svg>
)

/** 찜버튼 */
export const WishOnSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.4964 4.37833V22.6458L8.73685 18.4784C8.4151 18.2801 8.00901 18.2801 7.68726 18.4784L0.927734 22.6458L0.927734 4.37833C0.927734 2.30327 2.55839 0.621094 4.56989 0.621094L11.8542 0.621094C13.8657 0.621094 15.4964 2.30327 15.4964 4.37833Z" fill="#FFC24D" stroke="black" strokeLinecap="round"/>
    </svg>
)

export const WishOffSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.4964 4.37833V22.6458L8.73685 18.4784C8.4151 18.2801 8.00901 18.2801 7.68726 18.4784L0.927734 22.6458L0.927734 4.37833C0.927734 2.30327 2.55839 0.621094 4.56989 0.621094L11.8542 0.621094C13.8657 0.621094 15.4964 2.30327 15.4964 4.37833Z" fill="white" stroke="black" strokeLinecap="round"/>
    </svg>
)

