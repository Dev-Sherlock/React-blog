import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        }
      }
    
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json
            })
          })
      }

      
    render() { 
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
          return <div>Loading...</div>
        }
        return (   

            <div> 
            {items.map(item => (
          <Card key={item.id}>
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.body}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
            ))}
        </div> 
        );
    }
}
 
export default Posts;

