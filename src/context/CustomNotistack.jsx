import { SnackbarProvider, useSnackbar } from "notistack"
import { createContext } from "react"


export const CustomNotistackContext = createContext({})


function CustomNotistackProvider({children}) {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const setSuccessMsg = (message) => {
      enqueueSnackbar(message, { variant: 'success' })
  }

  const setErrorMsg = (message) => {
      enqueueSnackbar(message, { variant: 'error' })
  }


  return (
    <CustomNotistackContext.Provider value={{setSuccessMsg,setErrorMsg}}>
      {children}
    </CustomNotistackContext.Provider>
  )
}

export default CustomNotistackProvider