import React, { Component } from 'react';
import Form from './Form';

class FormResult extends Component {
    constructor(props) {
        super(props);
        this.editRef = React.createRef();
        this.state = {
            productList: [{
                ProductID: 1,
                ProductName:'Elements of Mathematics',
                Catagory: 'Maths',
                Description:'Maths Books for 12th',
                Price: 345
            }],
            isEditForm: false
        }
    }
    handleFormSubmission  = (Products) => {
        this.setState({
            isEditForm : false
        });
        let itemIndex = this.state.productList.findIndex((item => item.ProductID === Products[0].ProductID));
        if(itemIndex === -1) {
            this.setState({
                productList: [...this.state.productList, ...Products]
            });
        }
        else{
            this.state.productList[itemIndex] = Products[0];
            this.setState({
                productList: [...this.state.productList]
            });
        }   
    }

    editFromData = (editProduct) =>{
        //alert(editProduct.ProductName);
        this.setState({
            isEditForm : true
        });
        this.editRef.current.editFormData(editProduct);
    }
    
    render() {
        return (
            <React.Fragment>
                 <Form onFormSubmission={this.handleFormSubmission} ref={this.editRef} isEditForm={this.state.isEditForm}></Form> 
               <table style={{border: "solid 1px" , margin:"50px"}} >
                   <tbody >
                       <tr className="form-control">
                           <th>
                               Product Name
                           </th>
                           <th>
                                Catagory
                           </th>
                           <th>
                                Description
                           </th>
                           <th>
                                Price
                           </th>
                           <th>
                                Action
                           </th>
                       </tr>
                            {this.state.productList.map(product => 
                                <tr className="form-control" key={product.ProductID}>
                                <td>
                                    {product.ProductName}
                                </td>
                                <td>
                                     {product.Catagory}
                                </td>
                                <td>
                                    {product.Description}
                                </td>
                                <td>
                                    {product.Price}
                                </td>
                                <td>
                                    <button className="form-control editBtn" onClick={() => 
                                        this.editFromData(product)}>Edit</button>
                                </td>
                            </tr>
                        )}
                   </tbody>
               </table>
            </React.Fragment>
        )
    }
}

export default FormResult
