import React, { Component } from 'react';
import ReactTable from "react-table";
import {API_SERVER_URL} from './constants.js'
import ProdosForm from './ProdosForm.js'
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-table/react-table.css';
import './App.css';

class ProdosTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [          
          ]
        };
    }

  componentDidMount() {
     fetch(API_SERVER_URL+'/prodos/products', {mode: 'cors'})
     .then((response) => response.json())
     .then((responseData) => {
      this.setState({
        products: responseData.products,
        });
      })
      .catch(err => console.error(err));
  }

  deleteConfirm = (id) => {
    confirmAlert({
      message: 'Are you sure to delete?',
      buttons: [
      {
        label: 'Yes',
        onClick: () => this.handleDeleteClick(id)
      },
      {
        label: 'No',
      }
      ]
    })
  }
  handleDeleteClick = (id) => {
    // Delete the product
    fetch(API_SERVER_URL+'/prodos/products/'+id,
    {
      method: 'DELETE', 
    })
    .then(res => {
      toast.success("Product deleted", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      this.fetchProducts();
      })
      .catch(err => {
        toast.error("Error when deleting", {
        position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err)
      })
  };
    render() {
      const columns = [{
        Header: 'Name',
        accessor: 'name'
        }, {
        Header: 'Type',
        accessor: 'type',
        }, {
        Header: 'Brand',
        accessor: 'brand',
        }, {
        Header: 'Description',
        accessor: 'description',
        },
        {
          Header: 'Action',
          id: 'delbutton',
          sortable: false,
          filterable: false,
          width: 100,
          accessor: 'id',
          Cell: ({value}) => (<button onClick={()=>{this.deleteConfirm(value)}}>Delete</button>)
          }]  

      return (
      <div>
        <h1 className= "Prodos">Product List for {this.props.name}</h1>
        <ReactTable data={this.state.products} columns={columns} filterable={true} pageSize={5}/>
        <ProdosForm addProduct={this.addProduct} fetchProducts={this.fetchProducts}/>
        <ToastContainer autoClose={1500} />
       </div>
      );
    }
  }
export default ProdosTable;