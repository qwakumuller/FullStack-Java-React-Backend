import React, { Component } from 'react';
import axios from 'axios';

 class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts:[]
           
        }
    }
    handleChange =(input) => (event)=>{
        this.setState({
          [input] : event.target.value
           
        })
    }

    updateone= (id) =>{
        axios.get('http:localhost:8080/log/'+id)
        .then (response =>{
            console.log(response.data)
            this.setState({posts : response.data})
        }).catch(error =>{
            console.error(error);
        })
    }
       

        submithand = (e, id) =>{
            e.preventDefault()
            console.log(this.state);
            axios.put('http://localhost:8080/update/'+id, this.state).then(response =>{
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

                  <button type ='submit'>UPDATE</button>
                 </div> 

                   </form> 
                
            </div>
        )
    }
}

export default PostForm
