# 初始react

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- 包含react需要的代码 -->
    <script src="../lib/react.js"></script>
    <!-- 渲染库，用于在不同平台渲染 -->
    <script src="../lib/react-dom.js"></script>
    <!-- 用于将jsx语法装换成js语法 -->
    <script src="../lib/babel.js"></script>

    <!-- 添加类型，让浏览器知道接下来要使用babel来解析代码 -->
    <script type="text/babel">
      
      const element = <div>我是内容</div>;

      // 渲染内容
      const root = ReactDOM.createRoot(document.querySelector("#root"));
      root.render(element);

    </script>
  </body>
</html>
```

## React组件化开发的问题
+ 1. 数据在哪里定义? 数据可以被分为两类。
  * 参与页面更新的数据：定义在`this.state`中
  * 不参与页面更新的数据

我们可以使用`this.setState`来更新数据。

+ 2. 组件中this指向问题。
```JavaScript
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello World'
    }
  }

  btnClick() {
    this.setState({
      message: 'Hello Reaact'
    })
  }

  render() {
    const { message } = this.state

    /*
      因为在绑定事件的时候，我们绑定的是React的element节点
      所以在执行点击事件的时候，React并没有帮我们在执行函数的时候绑定this
      
      实际上是这样的: 
      使用了默认调用并且在在Class中默认使用了严格模式所以当前函数的this指向为undefined
      const newBtnClick = this.btnClick
      newBtnClick() 
    */ 
    return (
      <div>
        <p>{message}</p>
        <button onClick={this.btnClick}>点击我更改</button>
      </div>
    )
  }
}
```
解决方法: 
+ 1. 在constructor中手动绑定一次this
```JavaScript
this.btnClick = this.btnClick.bind(this)
```
+ 2. 在button中直接绑定
```JavaScript
<button onClick={this.btnClick.bind(this)}>点击我更改</button>
```


## this.setState做的事情
+ 1. 将需要修改的属性值进行修改
+ 2. 重新执行一次render方法


