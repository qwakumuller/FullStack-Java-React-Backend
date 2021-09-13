import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
 class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            country: '',
            department: ''
        }
    }
    handleChange =(input) => (event)=>{
        this.setState({
          [input] : event.target.value
           
        })
    }
       

        submithand = e =>{
            e.preventDefault()
            console.log(this.state);
            axios.post('http://localhost:8080/log', this.state).then(response =>{
                console.log(response)
            }).catch(error =>{
                console.log(error);
            });
        }
    
    
    render() {
        const{ firstName, lastName, country, department}= this.state;
        return (
            <div>
               <form onSubmit={this.submithand}>
                   

                   <div>
                       <label>Name</label>
                        <input
                        type="text" 
                        name=" firstName"  
                        value={firstName} 
                        onChange={this.handleChange('firstName')}></input>
                   </div>

                   <div>
                      lastName <input type="text"
                       name =" lastName " 
                       value={lastName} 
                       onChange={this.handleChange('lastName')}></input>
                   </div>
                   <div>
                     Country:  <input type="text" 
                     name=" country"  
                     value={country} 
                     onChange={this.handleChange('country')}></input>
                   </div>

                   <div>
                     Department:  <input
                      type="text"
                      name=" department"  
                      value={department} 
                       onChange={this.handleChange('department')}></input>
                   </div>

                   <div>

                <button type ='submit'>ADD</button> 
                 </div> 

                   </form> 
                
            </div>
        )
    }
}

export default PostForm
