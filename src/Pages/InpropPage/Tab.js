import React from "react"

const style = {
  // marginTop:'20px',
  padding: "4px 0",
  borderBottom: "3px solid transparent",
  display: "inline-block",
  cursor: "pointer",
  width: "33%",
  // color: "rgba(255, 255, 255, .7)",
  color :'#FC780B',
  textAlign: "center",
  fontSize :"12px",
  // border: "1px solid black", 
}

const activeStyle = {
  ...style,
  color: "white",
  // borderBottom: "3px solid black",
  backgroundColor: "#FC780B",
  borderRadius:'30px'

}

const TabBar = ({ children, isActive }) => (

  <span className="shadow"  style={isActive ? activeStyle : style}>{children}</span>

)

export default TabBar
