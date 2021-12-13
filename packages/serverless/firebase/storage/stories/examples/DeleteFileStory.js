import useFirebaseStorage from '../../useFirebaseStorage'

export default function DeleteFileStory() {
  const [fileToDelete, setFileToDelete] = useState(null)
  const firebaseStorage = useFirebaseStorage({
    path: fileToDelete,
    type: 'delete',
  })

  useEffect(() => {
    if (fileToDelete) {
      firebaseStorage.exec()
    }
  }, [fileToDelete])

  const handleInput = () => {
    setFileToDelete('images/helllooo.jpg')
  }

  return (
    <>
      <button onClick={handleInput}>delete</button>
      <br />
      <br />
      {firebaseStorage.loading && 'Deleting...'}
      {firebaseStorage.error && firebaseStorage.error.message}
      {firebaseStorage.result && firebaseStorage.result}
    </>
  )
}
