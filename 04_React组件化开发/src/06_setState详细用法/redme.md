# React为什么要使用setState

在开发中我们并不能直接通过修改state的值来让界面发生更新，因为React中没有做数据劫持，所以我们在修改state中的内容并不能重新渲染界面，但是我们又希望修改state中的值后重新让界面渲染，我们`必须要通过setState来告知React数据已经发生变化`，让它去重新渲染界面。在vue中我们修改了data中的数据后页面就会重新渲染，这是因为vue内部做了数据劫持，之后监听到数据更新后，vue内部帮我们重新渲染界面(执行render函数)。在react中，我们需要通过setState来告诉react修改了数据，让它帮我们重新渲染界面。


# setState的用法
用法一: 传入一个对象
```JavaScript
this.setState({ message: '你好啊，李银河' })
```

用法二: 传入一个回调函数，返回一个对象
+ 好处一: 可以在回调函数中编写新的state数据的逻辑
+ 好处二: 回调函数会将之前的state、props传递过来
```JavaScript
this.setState((state, props) => {
	console.log(state, props) // 之前的状态
	return {
		message: '你好啊，李银河'
	}
})
```

用法三: setState在React事件处理中是一个异步操作

如果希望在数据更新(数据合并)之后，对更新后的数据做一下操作，可以传入第二个参数，一个回调函数，在这个函数中访问数据会得到更新后的数据
```JavaScript
this.setState({ message: '你好啊，李银河' }, () => {
  console.log(this.state.message) // '你好啊，李银河'
})

// 因为是异步操作，所以数据还没更新拿不到更新后的值
console.log(this.state.message) // Hello World
```


# setState为什么设计成异步的？
+ 提高性能

如果setState是同步的我们每次调用的时候都会执行一次render函数，页面就会重新渲染一遍。react做法就是内部收集多次更新，之后做批处理。react在内部维护了一个队列，将每一次的setState操作都放在里面，之后等要更新的时候就从队列中将需要修改的数据拿出进行挨个合并，最后执行render函数，重新渲染页面。

+ state和props数据一致性
  
假如说一个组件里面有子组件用到了父组件的数据，如果说setState是同步的你使用setState修改了数据，但是在执行下面代码的时候报错了，但是子组件内还用了修改的属性，但是代码报错了，子组件里的数据还是修改前的数据，会导致数据的不一致性。

# setState什么时候是同步的什么时候是异步的？
+ React18之前
  + 在`组件生命周期、React合成事件中`，setState是`异步`
  + 在`setTimeout、原生dom事件、promise的then回调中`，setState是`同步`

+ React18之后
所有的setState都是异步的。

# 怎么做才可以让setState是同步的？
如果希望调用setState是同步的可以通过`flushSync`函数传入一个回调函数，在这个回调函数中执行setState会被当作一次，就会渲染一次界面。
```JavaScript
import { flushSync } from 'react-dom'

flushSync(() => {
  this.setState({ message: '你好啊，李银河' })
})
console.log(this.state.message) // '你好啊，李银河'
```