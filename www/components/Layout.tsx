const Layout = ({children}): React.ReactElement => {
  return (
    <div>
      <div>Nav</div>
      <div className="max-w-md mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout;