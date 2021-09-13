import React, { Component } from 'react'
import axios from'axios';
import {Link} from 'react-router-dom';

export class Get extends Component {
    constructor(props){
        super(props)

        this.state ={
            posts:[]   ,
            firstName: '',
            lastName: '',
            country: '',
            department: ''
        
            
           
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/log')
        .then
                 (response =>{
                  console.log(response.data)
                 this.setState({posts : response.data})
        })
          .catch (error =>{
              console.log(error)
          })
    }

    
       
    

    deleteone( id){
        console.log(id)
        
       
axios.delete('http://localhost:8080/delete/'+id)
.then(response =>{
 console.log(response)
})
    }

    updateone(id){
        console.log(id)
axios.put('http://localhost:8080/update/'+id, )
.then(response =>{
    console.log(response)
})



    
}

    


   
    render() {
        const { posts } = this.state;
        return (
          
            <div>
              



                    <div>

                    <table>
  <tr>
      <th>Employee ID </th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Country</th>
    <th>Department</th>
    <th> Delete</th>
    <th>Update</th>
  </tr> 
  
  
   

  <tr>
      <td>
  {
                        posts.length ?
                    posts.map(post => <div key={post.id}>{post.employeeID} </div>) : null
                    
                    }

                   
                    </td>

    <td> {
                        posts.length ?
                    posts.map(post =><div>  <li key={post.id}>{post.firstName} </li> </div>) : null
                    
                    }
                    
                    </td>


    <td>{
                        posts.length ?
                    posts.map(post => <div key={post.id}>{post.lastName} </div>) : null
                    
                    }
                    </td>


    <td>{
                        posts.length ?
                    posts.map(post => <div key={post.id}>{post.country} </div>) : null
                    
                    }</td>


                    
    <td>{
                        posts.length ?
                    posts.map(post => <div key={post.id}>{post.department} </div>) : null
                    
                    }</td>

                    <td>{
                        
                        posts.length ?
                        posts.map(post => <div key={post.id}><button onClick={this.deleteone.bind(this, post.employeeID)}>DELETE</button> </div>) : null
                        
                        
                        }</td>

<td>{
                        
                        posts.length ?
                        posts.map(post => <div key={post.id}><Link to ={`update/${post.employeeID}`}><button onClick={this.updateone.bind(this, post.employeeID)}>UPDATE</button> </Link> </div>) : null
                        
                        
                        }</td>


  </tr>

</table>
                    </div>

                
            </div>
            
        )
    }
}

export default Get
