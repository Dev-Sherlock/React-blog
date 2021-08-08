import React, { Component } from 'react';


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
              <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.title}
                {item.body}
              </li>
            ))}
          </ul>
        </div> 
        );
    }
}
 
export default Posts;

