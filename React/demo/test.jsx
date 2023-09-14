import React,{Component} from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  increment() {
    this.setState((state) => {
      return {
        counter:state + 1
      }
    })
  }
}