import propTypes from "prop-types"
function Layout({children}) {
  return (
    <div className="flex  flex-col items-center">{children}</div>
  )
}

Layout.propTypes={
    children:propTypes.element
  }

export default Layout