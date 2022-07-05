import React from 'react';
import {
  Outlet
} from "react-router-dom";
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
import Appbar from './components/Appbar.componet';


const Content = styled(Paper)({
  position: "fixed",
  backgroundColor: "rgb(231, 235, 240)",
  top: 0,
  width: "100%",
  height: "100%"
});



function App() {

  return (
    <div className="App">
      <Appbar></Appbar>
      <Content elevation={0} style={{
        overflow: 'auto',
        marginTop: 65
      }} square >
        <Outlet />
      </Content>
    </div>
  );
}

export default App;
