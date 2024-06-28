import Header from "./components/common/Header"

const RootLayout = ({ children }) => {

  return (
    <>
      <Header />
      {children}


    </>

  )
}

export default RootLayout