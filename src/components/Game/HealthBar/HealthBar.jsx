import React from "react";

const HealthBar = (props) => {

  const { completed } = props;

  let bgcolor = "#04AA6D";

  const containerStyles = {
    height: 20,
    width: '20%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}% HP`}</span>
      </div>
    </div>
  );
};

export default HealthBar;