// import { useRef, useEffect, Fragment, useState } from 'react'

// import styles from './index.module.scss'

// const DragDropUpload = ({ max = 1, title, onUpload = () => null }) => {
//   const [isHovering, setIsHovering] = useState(null)
//   const [isDisabled, setIsDisabled] = useState(false)
//   const [uploadedFiles, setUploadedFiles] = useState([])
//   // uses ref as well to handle html drag and drop state mess
//   const uploadedFilesRef = useRef([])
//   const uploadWrapperRef = useRef(null)
//   const inputRef = useRef(null)
//   const isHoveringClass = isHovering ? styles.isHovering : ''
//   const isDisabledClass = isDisabled ? styles.isDisabled : ''
//   const label = isTouchScreen() ? 'Choose Photo' : 'Drag Here or Upload'

//   useEffect(() => {
//     uploadWrapperRef.current.addEventListener('dragenter', handleDragenter)
//     uploadWrapperRef.current.addEventListener('dragleave', handleDragleave)
//     uploadWrapperRef.current.addEventListener('dragover', handleDragenter)
//     uploadWrapperRef.current.addEventListener('drop', handleDrop)

//     return () => {
//       uploadWrapperRef.current.removeEventListener('dragenter', handleDragenter)
//       uploadWrapperRef.current.removeEventListener('dragleave', handleDragleave)
//       uploadWrapperRef.current.removeEventListener('dragover', handleDragenter)
//       uploadWrapperRef.current.removeEventListener('drop', handleDrop)
//     }
//   }, [])

//   const handleDragenter = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     setIsHovering(true)
//   }

//   const handleDragleave = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     setIsHovering(false)
//   }

//   const handleDrop = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     const file = e.dataTransfer.files[0]

//     handleUpload(file)
//   }

//   const handleFileUpload = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     const {
//       current: { files }
//     } = inputRef
//     const file = files[0]

//     handleUpload(file)
//   }

//   const handleUpload = (file) => {
//     if (!file) return null
//     const { name } = file
//     const oneUploadMax = max === 1
//     let currentlyUploaded = uploadedFilesRef.current.slice()
//     const reachedMax = currentlyUploaded.length === max
//     const isLastAvailableAddition = max - currentlyUploaded.length === 1
//     isLastAvailableAddition && setIsDisabled(true)
//     const isAdded = currentlyUploaded.find((file) => file.fileName === name)

//     if ((isAdded && oneUploadMax) || reachedMax) return null

//     const fileReader = new FileReader()

//     fileReader.readAsDataURL(file)

//     fileReader.onload = (e) => {
//       const srcBase64 = e.target.result
//       const payload = {
//         file,
//         src: srcBase64,
//         fileName: name,
//         alt: { name },
//       }
//       if (oneUploadMax) {
//         setUploadedFiles([payload])
//         uploadedFilesRef.current = [payload]
//         onUpload(file)
//       } else if (!isAdded) {
//         currentlyUploaded.push(payload)
//         setUploadedFiles(currentlyUploaded)
//         uploadedFilesRef.current = currentlyUploaded
//         onUpload(currentlyUploaded)
//       }
//       inputRef.current.value = null
//     }
//   }

//   const handleFileRemove = (fileName) => {
//     const currentlyUploaded = uploadedFilesRef.current.slice()
//     const removedFile = currentlyUploaded.filter(
//       (file) => file.fileName !== fileName
//     )
//     setUploadedFiles(removedFile)
//     uploadedFilesRef.current = removedFile
//     onUpload(removedFile)
//     setIsDisabled(false)
//   }

//   return (
//     <div className={`${styles.wrapper}`}>
//       {title && <h6 className={`label3`}>{title}</h6>}

//       <div
//         ref={uploadWrapperRef}
//         className={`${styles.uploadWrapper} ${isHoveringClass} ${isDisabledClass}`}
//       >
//         <input
//           ref={inputRef}
//           className={`${styles.input}`}
//           type="file"
//           accept="image/*"
//           onChange={handleFileUpload}
//         />

//         <div className={`${styles.uploadWrapperInner}`}>
//           <div className={`${styles.iconShare} icon-share`}>&nbsp;</div>
//           <span className={`${styles.text} label3`}>{label}</span>
//         </div>
//       </div>
//       {uploadedFiles?.length > 0 && (
//         <div className={`${styles.previewList}`}>
//           {uploadedFiles.map((file) => {
//             return (
//               <Fragment key={file.fileName}>
//                 <Preview
//                   src={file.src}
//                   alt={file.alt}
//                   onRemove={handleFileRemove}
//                   fileName={file.fileName}
//                   showName={max <= 1}
//                   mini={max > 1}
//                 />
//               </Fragment>
//             )
//           })}
//         </div>
//       )}
//     </div>
//   )
// }

// const Preview = ({
//   src = '',
//   alt = '',
//   fileName = '',
//   onRemove = () => null,
//   showName = true,
//   mini = true
// }) => {
//   return (
//     <div className={`${styles.previewWrapper} ${mini ? styles.mini : ''}`}>
//       <img src={src} alt={alt} />
//       <div onClick={() => onRemove(fileName)} className={`${styles.closeIcon}`}>
//         &nbsp;
//       </div>
//       {showName && <p className={`label3`}>{fileName}</p>}
//     </div>
//   )
// }

// const isTouchScreen = () => window.matchMedia('(pointer: coarse)').matches

// export default DragDropUpload
