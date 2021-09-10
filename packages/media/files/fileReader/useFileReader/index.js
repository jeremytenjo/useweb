import fileReader from '..'

export default function useFileReader() {
  const [progress, setprogress] = useState(0)

  const readFile = async (props) => {
    const getProgress = (percent) => {
      setprogress(percent)
    }
    const data = await fileReader(props, getProgress)
    return data
  }

  return { readFile, progress }
}
