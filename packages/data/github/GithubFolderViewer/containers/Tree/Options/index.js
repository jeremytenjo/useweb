import Box from '../../../../../../dataDisplay/Box'
import Button from '../../../../../../input/Button/styles/1'
import IconGithub from '../../../../../../dataDisplay/Icon/library/IconGithub1'
import useGithubFolderViewerProps from '../../../DataProvider/useGithubFolderViewerProps'

export default function Options() {
  const props = useGithubFolderViewerProps()

  return (
    <Box
      styles={{
        gridAutoFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'xs',
      }}
    >
      <Button text='Download' onClick={props.onDownloadAllFiles} size='small' />
      {props.githubLink && (
        <a
          href={props.githubLink}
          target='_blank'
          rel='noreferrer'
          title='Open in github'
        >
          <IconGithub size='22px' />
        </a>
      )}
    </Box>
  )
}
