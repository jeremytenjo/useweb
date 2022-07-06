import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

import ReactJson from './ReactJson/ReactJson'
import JSONToTS from './JSONToTS/JSONToTS'

export type FetchingUiProps = {
  onClick: any
  loading: any
  error: any
  result: any
}

export default function FetchingUi({ onClick, loading, error, result }: FetchingUiProps) {
  const [value, setValue] = React.useState(0)

  const isResultObject = typeof result === 'object'
  const showTSTypesTab = result && isResultObject

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ p: 2 }}>
      <Button
        name='Execute Button'
        onClick={onClick}
        sx={{ mb: 2, color: 'black.main', backgroundColor: 'white.main' }}
        variant='contained'
      >
        Execute
      </Button>

      {loading && <LinearProgress sx={{ width: '100%', mb: 2 }} />}

      {error && <p>{error.toString()}</p>}

      <Tabs value={value} onChange={handleChange} aria-label='Fetching UI Tabs'>
        <Tab label='Results' />
        {showTSTypesTab && <Tab label='Result TS Types' />}
      </Tabs>

      <TabPanel value={value} index={0}>
        {result && <>{isResultObject ? <ReactJson json={result} /> : result}</>}
      </TabPanel>

      {showTSTypesTab && (
        <TabPanel value={value} index={1}>
          <JSONToTS json={result} />
        </TabPanel>
      )}
    </Box>
  )
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  )
}
