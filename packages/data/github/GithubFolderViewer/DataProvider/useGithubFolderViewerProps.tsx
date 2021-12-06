import React, { createContext, useContext } from 'react'

const UseGithubFolderViewerPropsContext = createContext(null)

export const UseGithubFolderViewerPropsProvider = ({ children, props }) => {
  return (
    <UseGithubFolderViewerPropsContext.Provider
      value={{
        ...props,
      }}
    >
      {children}
    </UseGithubFolderViewerPropsContext.Provider>
  )
}

const useGithubFolderViewerProps = () => useContext(UseGithubFolderViewerPropsContext)

export default useGithubFolderViewerProps
