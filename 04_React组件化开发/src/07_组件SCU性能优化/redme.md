# 多次执行render函数

在下面代码中，如果我们点击了修改文本的操作，那么就会执行一次App组件的render函数，那么对应的我们所用到的Home组件、Profile组件的render函数也会被执行，因为我们用到了这两个组件，在界面重新渲染时也会被重新执行。这样就会导致性能问题，我们修改文本的时候，Profile组件并没有用到message的数据，但是我们修改了message，Profile组件的render函数还是会被重新执行，当我们修改counter时Home组件也是同样情况。
```JavaScript
class App extends Component {
	constructor() {
		super()

		this.state = {
			message: 'Hello World',
			counter: 0
		}
	}

	changeText() {
		this.setState({ message: 'Hello React' })
	}

	incerment() {
		this.setState({ counter: this.state.counter + 1 })
	}

	render() {
		return (
			<div>
				<h2>App Component</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.incerment()}>+1</button>
				<Home message={this.state.message} />
				<Profile counter={this.state.counter} />
			</div>
		)
	}
}
```

那有没有办法让他们在没有修改的情况下不重新执行render函数，在React中为我们提供了一个生命周期函数`shouldComponentUpdate`, 当它返回true时组件就会执行render函数，返回false时组件就不会执行render函数，我们拿Home组件来说，我们可以根据下面这样做让他不去执行render函数：
```JavaScript
class Home extends Component {
  // 在执行render函数前会执行当前的生命周期函数，并将最新的props、state传递过来
  shouldComponentUpdate(newProps, newState) {
    // 当message和最新的message比较时，如果没有变化就不执行render函数
    if (this.props.message !== newProps.message) {
      return false
    }
    return true
  }

  render() {
    return (
      <div>
        <h2>Home Component: {this.props.message}</h2>
      </div>
    )
  }
}
```

这样做的话是不是就可以提高我们的性能，在一些不需要重新渲染组件的时候我们做像上面的操作，可以在一定程度上提高我们的性能。但是如果我们有用到好多个属性，我们得一个个去判断这样就很麻烦，在React中也想到了这点，所以给我们提供了相对应的方法。`PureComponent`和`memo`，一个用于类组件一个用于函数组件，它们就是帮助我们做上面的操作。

App组件：
```JavaScript 
class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			message: 'Hello World',
			counter: 0
		}
	}

	changeText() {
		this.setState({ message: 'Hello React' })
	}

	incerment() {
		this.setState({ counter: this.state.counter + 1 })
	}

	render() {
		return (
			<div>
				<h2>App Component</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.incerment()}>+1</button>
				<Home message={this.state.message} />
				<Profile counter={this.state.counter} />
			</div>
		)
	}
}
```

Home组件: 
```JavaScript
class Home extends PureComponent {

  shouldComponentUpdate(newProps, newState) {
    if (this.props.message !== newProps.message) {
      return false
    }
    return true
  }

  render() {
    return (
      <div>
        <h2>Home Component: {this.props.message}</h2>
      </div>
    )
  }
}
```
继承至`PureComponent`后的组件，这样我们在修改state的时候，组件内部就会帮助我们做之前我们所讲到的判断的操作，就会根据状态是否有变化来决定要不要执行render函数，这样就可以提高性能。


# PureComponent、memo内部原理

`PureComponent`内部就是调用了一个`shallowEqual`的函数去判断新的state与之旧的state是否相同，如果有发生变化就执行render函数，没有发生变化就不执行render函数。但是`PureComponent做的是浅层比较`


