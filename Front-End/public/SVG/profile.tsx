// 임시 프로필
export const ProfileSVG = ({size}:any) =>(           
<svg xmlns="http://www.w3.org/2000/svg" width={String(size)} height={String(size)} viewBox="0 0 30 30" fill="none">
<rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="white" stroke="#848383"/>
    <path d="M7 22C7 19.1875 10.75 19.1875 12.625 17.3125C13.5625 16.375 10.75 16.375 10.75 11.6875C10.75 8.56281 11.9997 7 14.5 7C17.0003 7 18.25 8.56281 18.25 11.6875C18.25 16.375 15.4375 16.375 16.375 17.3125C18.25 19.1875 22 19.1875 22 22" stroke="#BEBEBE" strokeLinecap="round"/>
</svg>
)

/** 프로필 수정 버튼 */
export const ProfileEditSVG = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="12" fill="#FFF1E4" stroke="#FF993A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5858 5.41421C17.3668 4.63317 18.6332 4.63317 19.4142 5.41421L20.5858 6.58579C21.3668 7.36684 21.3668 8.63316 20.5858 9.41421L9.58579 20.4142C9.21071 20.7893 8.70201 21 8.17157 21L5 21L5 17.8284C5 17.298 5.21071 16.7893 5.58579 16.4142L16.5858 5.41421Z" stroke="#FF993A"/>
        <path d="M15 7L19 11" stroke="#FF993A"/>
    </svg>
)

export const NickNameEditSVG = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#D9D9D9"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5858 5.41421C17.3668 4.63317 18.6332 4.63317 19.4142 5.41421L20.5858 6.58579C21.3668 7.36684 21.3668 8.63316 20.5858 9.41421L9.58579 20.4142C9.21071 20.7893 8.70201 21 8.17157 21L5 21L5 17.8284C5 17.298 5.21071 16.7893 5.58579 16.4142L16.5858 5.41421Z" stroke="black"/>
        <path d="M15 7L19 11" stroke="black"/>
    </svg>
)

/** 토글 아래방향 아이콘 */
export const DownWardToggleSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 10L12 16L18 10" stroke="white" stroke-linecap="round"/>
    </svg>
)