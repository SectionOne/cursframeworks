/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class FetchDataComponent extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    console.log('Component muntat!');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => this.setState({ data: json.map((post) => post.title) }));
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {this.state.data.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FetchDataComponent;
