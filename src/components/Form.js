import React, { Component } from 'react'

import './tableStyles.css'
import FormResult from './FormResult';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
             products: [],
             ProductName: '',
             Description: '',
             Price: '',
             Catagory: '',
             count: 1,
        }
    }
    handleFormChange = (event) => {
        const data = {
            [event.target.name]: event.target.value
        };
    
        this.setState(data);
        
        
    }
    handleFormSubmission = (event) => {
        if(!this.props.isEditForm){
            this.state.count += 1;
        }
        this.state.products = [];
        //
        this.state.products.push({ProductID:this.state.count, ProductName:this.state.ProductName, Catagory: this.state.Catagory, 
            Description: this.state.Description, Price: this.state.Price})
            this.setState({
                ProductName: '',
                Description: '',
                Price: '',
                Catagory: '',
            })
            this.props.onFormSubmission(this.state.products);
            event.preventDefault();
    }
    editFormData = (editProduct) =>{
        this.setState({
            count: editProduct.ProductID,
            ProductName: editProduct.ProductName,
            Description: editProduct.Description,
            Price: editProduct.Price,
            Catagory: editProduct.Catagory,
        });
    }
    render() {
        return (
            <React.Fragment>    
            <form onSubmit={this.handleFormSubmission} >
                <table>
                    <tbody>
                        <tr>
                        <td><label>ProductName<span style={{color: "red"}}>*</span></label></td>
                        <td><input className="form-control" type="text" name="ProductName" required value={this.state.ProductName} onChange={this.handleFormChange} /></td>

                        </tr>
                        
                        <tr>
                        <td><label>Catagory <span style={{color: "red"}}>*</span></label></td>
                        <td><select required onChange={this.handleFormChange} name="Catagory" value={this.state.Catagory} className="form-control">
                            <option value=''>Select Catagory</option>
                            <option value='Physics'>Physics</option>
                            <option value='Chemistry'>Chemistry</option>
                            <option value='Maths'>Maths</option>
                        </select></td>
                        </tr>
                        <tr>
                        <td><label>Description</label></td>
                        <td><input className="form-control" type="text" name="Description" value={this.state.Description} onChange={this.handleFormChange} /></td>
                        </tr>
                        <tr>
                        <td><label>Price <span style={{color: "red"}}>*</span></label></td>
                        <td><input  className="form-control" type="number" name="Price" required value={this.state.Price} onChange={this.handleFormChange}/></td>
                        </tr>
                        <tr>
                        <td>    </td>
                        <td><button  className="form-control saveBtn" type="submit">Save</button></td>
                        </tr>
                    </tbody>  
                </table>
                
            </form>            
        </React.Fragment>
        )
    }
}

export default Form
