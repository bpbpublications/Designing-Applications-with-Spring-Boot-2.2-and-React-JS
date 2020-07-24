import React, { Component } from 'react';

class ProdosTableRow extends Component {
    linkClicked = () => {
      alert('Link clicked');
    }

    updateProductList = () => {
        fetch('http://localhost:8181/prodos/products')
        .then((response) => response.json())
        .then((responseData) => {
        this.setState({
          products: responseData.products,
        });
      })
      .catch(err => console.error(err));
    }

    handleDeleteClick = (id) => {
      // Delete the product
      fetch('http://localhost:8181/prodos/products/'+id,
      {
        method: 'DELETE', 
      })
      .then(this.updateProductList())
      .catch(error => console.error('Error:', error));
  };
    
    render() {
     return (
          <tr>
              <td>{this.props.product.name}</td>
              <td>{this.props.product.type}</td>
              <td>{this.props.product.brand}</td>
              <td>{this.props.product.description}</td>
              <td><a href="#" onClick={this.linkClicked} >Edit</a></td>
              <td><a href="#" onClick={()=>{this.handleDeleteClick(this.props.product.id)}} >Delete</a></td>
              <td><a href="#" onClick={this.linkClicked} >View</a></td>
          </tr>
        );
    }
  }

  export default ProdosTableRow