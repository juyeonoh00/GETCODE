// export const ImageHandler = () => {
//   const input = document.createElement('input');
//   input.setAttribute('type', 'file');
//   input.setAttribute('accept', 'image/*');
//   input.click();

//   input.addEventListener('change', async () => {
//     const file = input.files[0];

//     try {
//       const res = await imageApi({ img: file });
//       const imgUrl = res.data.imgUrl;
//       const editor = quillRef.current.getEditor(); 
//       const range = editor.getSelection();
//       editor.insertEmbed(range.index, 'image', imgUrl);
//       editor.setSelection(range.index + 1);
//     } catch (error) {
//       console.log(error);
//     }
//   });
// };