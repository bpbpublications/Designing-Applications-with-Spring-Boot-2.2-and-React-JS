import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class ProdosHeader extends Component {
    render() {
      return (
          <div>
            <table className="App-Header">
              <tr >
                <td >
                  <img alt="prodos logo" src={logo} height="150px;"/>
                </td>
                <td >
                  <h2>Welcome to Prodos Application, a Product Management Tool</h2>
                </td>
              </tr>
            </table>
          </div>
        );
    }
  }

  export default ProdosHeader