import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./Hello/Hello";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default () => <MuiThemeProvider><RaisedButton label="Default" /></MuiThemeProvider>