import useFirebaseStorage from '../../useFirebaseStorage'
import FileUpload from '../../../../../media/files/fileInput'

export default function UploadFileStory() {
  const [fileToUpload, setFileToUpload] = useState({})
  const firebaseStorage = useFirebaseStorage({
    path: fileToUpload.name,
    file: fileToUpload.file,
  })

  useEffect(() => {
    if (fileToUpload.file) {
      firebaseStorage.exec()
    }
  }, [fileToUpload])

  const handleInput = (payload) => {
    setFileToUpload({ file: payload.file, name: 'images/helllooo.jpg' })
  }

  return (
    <>
      <FileUpload onInput={handleInput} />
      <br />
      <br />
      {firebaseStorage.loading && 'Uploading...'}
      {firebaseStorage.error && firebaseStorage.error}
      {firebaseStorage.result && firebaseStorage.result}
    </>
  )
}
