import React, { Component } from 'react';
import SkyLight from 'react-skylight';

class ProdosForm extends Component {
    constructor(props) {
      super(props);
      this.state = {id: '', name: '', brand: '',type: '', description: ''};
    };

    inputChanged = (event) => {
      this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = (event) => {
      event.preventDefault();
      var newProduct = {id: this.state.id, name: this.state.name, brand: this.state.brand, 
      type: this.state.type, description: this.state.description};
      const myHeaders = new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      });
      var productForm = new FormData(document.getElementById('product-form'));
      // Add new product
      fetch('http://localhost:8181/prodos/products',
      {
        method: 'POST', mode: 'no-cors', body: productForm, 
        headers:myHeaders,
      })
      
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
    };
    
    // Cancel and close modal form
    cancelSubmit = (event) => {
      event.preventDefault();
      this.refs.addDialog.hide();
    }

  
    render() {
      return (
        <div>
          <SkyLight hideOnOverlayClicked ref="addDialog">
          <form onSubmit={this.handleUpdate} id="product-form">
            <table>
              <tr>
                <td>ID: </td>
                <td><input type="text" name="id" onChange={this.inputChanged} value={this.state.id}/></td>
              </tr>
              <tr>  
                <td>Name: </td>
                <td><input type="text" name="name" onChange={this.inputChanged} value={this.state.name}/></td>
              </tr>
              <tr> 
                <td>Brand: </td>
                <td><input type="text" name="brand" onChange={this.inputChanged} value={this.state.brand}/></td>
              </tr>
              <tr> 
                <td>Type: </td>
                <td><input type="text" name="type" onChange={this.inputChanged} value={this.state.type}/></td>
              </tr>
              <tr>     
                <td>Description: </td>
                <td><input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/></td>
              </tr>
              <tr> 
                <td><button onClick={this.handleSubmit}>Save</button></td>
                <td><button onClick={this.cancelSubmit}>Cancel</button></td>
              </tr>
            </table>  
          </form>
          </SkyLight>
          <div>
            <button style={{'margin': '10px'}} onClick={() => this.refs.addDialog.show()}>New Product</button>
          </div>
        </div>
        
      );
    }
  }

  export default ProdosForm