class ReactComponent {
  constructor(props) {
    this.props = props;
  }
}

class MyComponent extends ReactComponent {
  // 不需要在构造函数中显式传递 props
  constructor(props) {
    super()
  }
  render() {
    // 可以在这里访问 this.props
    return this.props.title
  }
}

const component = new MyComponent({ title: '今日新闻' });
console.log('component',component)


/* 初始状态 */