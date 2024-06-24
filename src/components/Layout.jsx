const Layout = (props) => {
    return(
      <>
        <div className="bg-cover flex-auto h-screen w-screen">
          {props.children}
        </div>
      </>
    )
  }
  
  export default Layout;