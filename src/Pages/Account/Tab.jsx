import React from "react"

const style = {
  padding: "10px 0",
  borderBottom: "3px solid transparent",
  display: "inline-block",
  cursor: "pointer",
  backgroundColor: "#FC780B",
  width: "50%",
  color: "rgba(255, 255, 255, .7)",
  textAlign: "center",
  fontSize :"16px"
}

const activeStyle = {
  ...style,
  color: "white",
  borderBottom: "3px solid black"
}

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default CustomTab
