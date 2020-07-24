import React, { Component } from 'react';
import ProdosHeader from './ProdosHeader';
import ProdosForm from './ProdosForm';
import ProdosTable from './ProdosTable';
import ProdosFooter from './ProdosFooter';

class ProdosApp extends Component {
      
    render() {
      return (
      <div>
        <ProdosHeader/><br/>
        <ProdosTable name="Electronic Items"/> <br/>
        <ProdosFooter/>
      </div>
      );
    }
  }
  export default ProdosApp