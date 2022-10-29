# React为什么选择JSX
React认为:
+ ui需要绑定事件
+ ui需要展示数据状态
+ 更改数据状态需要重新渲染ui

所以选择JSX，（JavaScript eXtension、JavaScript XML）

# JSX的本质
JSX本质其实就是`React.createElement`函数的语法糖，最终的JSX代码最后都会被转换成`React.createElement`调用。而装换成`React.createElement`函数会创建出一个`ReactElement`对象，一个个`ReactElement`对象组成一个`JavaScript对象树`，这个对象树就是`虚拟DOM`

createElement函数的三个参数: 
+ 参数一：type
  * 当前ReactElement的类型
  * 如果是标签元素，那么就使用字符串表示 “div”  
  * 如果是组件元素，那么就直接使用组件的名称

+ 参数二：config
  * 所有jsx中的属性都在config中以对象的属性和值的形式存储
  * 比如传入className作为元素的class

+ 参数三：children
  * 存放在标签中的内容，以children数组的方式进行存储


# 小知识
+ 将JSX转换成真实DOM的这个过程叫做`协调`