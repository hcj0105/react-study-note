import React, { PureComponent } from 'react'

export default class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			books: [
				{ name: 'js高级程序设计', price: 89, count: 20 },
				{ name: '你不知道的JavaScript', price: 77, count: 33 },
				{ name: 'Vue高级程序设计', price: 98, count: 22 },
				{ name: 'React高级程序设计', price: 109, count: 11 }
			]
		}
	}

	addBook() {
    /*
      1. 不要这样做,在继承至Component的组件，虽然可以重新渲染界面。但是Component会影响性能，所以在开发中一般使用PureComponent
      2. 在PureComponent中这样做是不会引起页面的重新渲染的，在内部是做了浅层比较，他对比新的books和旧的books时候是一样的
      但是虽然是给books新添加了一本书籍，但是它们还是同一个数组，所以在比较的时候新旧books还是相同的，所以并不会引起刷新
    */
		// this.state.books.push({ name: 'JavaScript权威指南', price: 89, count: 41 })
		// this.setState({ books: this.state.books })


    // 我们应该重新复制一份数据出来，在新的数据中去做操作，这样在做浅层比较的时候，发现不是同一个数组，就可以引起刷新了。
    const books = [...this.state.books]
    books.push({ name: 'JavaScript权威指南', price: 89, count: 41 })
    this.setState({ books })
	}

	render() {
		const { books } = this.state
		return (
			<div>
				<h2>数据列表:</h2>
				<ul>
					{books.map((book, index) => {
						return (
							<li key={index}>
								name: {book.name} -- price: {book.price} -- count: {book.count}
							</li>
						)
					})}
				</ul>

				<button onClick={() => this.addBook()}>添加书籍</button>
			</div>
		)
	}
}
