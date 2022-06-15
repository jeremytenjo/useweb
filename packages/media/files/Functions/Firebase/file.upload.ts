import { storageAdd } from '../../../../storage/firebase/storage'
import firestoreCreate from '../../../../data/database/firestore/create'
import compressImage from '../../../images/Image/utils/compress'
import imagesResize from '../../../images/Image/utils/resize/index'
import imagesFixOrientation from '../../../images/Image/utils/fixOrientation'

export default async (userId = null, files = null, collection = null) => {
  let uploadedFileData
  let uploadedFileId
  let compressedFile
  let fixedOrientationFile
  let currentDate
  let fileName
  let fileNameThumb
  let fullsizeImg_file
  let fullsizeImg_savePath
  let fullsizeImg_fileUrl
  let thumbImg_file
  let thumbImg_savePath
  let thumbImg_fileUrl

  if (files && userId && collection) {
    currentDate = Date.now()
    fixedOrientationFile = await imagesFixOrientation(files)
    compressedFile = await compressImage(fixedOrientationFile)
    fileName = compressedFile.name + currentDate
    fileNameThumb = `${compressedFile.name + currentDate}_thumb`

    // fullsize image
    fullsizeImg_file = await imagesResize(compressedFile, 800)
    fullsizeImg_savePath = `users/${userId}/${fileName}`
    fullsizeImg_fileUrl = await storageAdd(userId, fullsizeImg_savePath, fullsizeImg_file)

    // thumb image
    thumbImg_file = await imagesResize(compressedFile, 300)
    thumbImg_savePath = `users/${userId}/${fileName}_thumb`
    thumbImg_fileUrl = await storageAdd(userId, thumbImg_savePath, thumbImg_file)

    uploadedFileData = {
      userId,
      fileName,
      fileNameThumb,
      fullsizeImg_fileUrl,
      thumbImg_fileUrl,
      tags: [],
      timestamp: Date.now(),
    }

    uploadedFileId = await firestoreCreate(userId, collection, uploadedFileData)

    uploadedFileData._id = uploadedFileId

    return uploadedFileData
  } else {
    throw new Error(`Parameters with false need a value ${(files, userId, collection)}`)
  }
}
