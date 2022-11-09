# Redux的核心理念
+ store: 用于统一管理数据
  将数据保存在store中，这样每次修改数据的时候都可以查看到store中状态的变化，如果数据存在不同的位置就比较男的查看到当前的状态，并且还可以通过不同的方式进行修改状态。
+ action: 用去统一修改数据
  通过派发（dispatch）action 来更新数据，这样可以清晰的知道数据到底发生了什么样的变化，所有的数据状态都可以被查看到。
+ reducer: 用于连接store和action
  用于将传入的 state 和 action 结合起来生成一个新的 state。

# Redux的三大原则
+ 单一数据源: 
  利于维护状态、修改状态、追踪状态
+ state是只读的: 
  修改state只能通过action，不用担心state在其他被任何方式修改。保证所有修改state中的数据被统一处理并且按照顺序来执行，不同担心 race condition（竟态）的问题。（在不同的线程操作同一个对象）
+ 使用纯函数来执行修改：
  通过reducer将 旧state和 actions联系在一起，并且返回一个新的State，可以将reducer进行拆分，所有的reducer都是纯函数，不会产生任何的副作用。