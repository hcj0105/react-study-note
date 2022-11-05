import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			books: [
				{ id: 111, name: '你不知道的JavaScript', price: 60 },
				{ id: 222, name: 'VueJs高级程序设计', price: 78 },
				{ id: 333, name: 'ReactJs高级程序设计', price: 89 }
			]
		}
	}

	handleAddBook() {
		const books = [...this.state.books]
		books.push({
			id: new Date().getTime(),
			name: 'JavaScript高级程序设计',
			price: 99
		})
		this.setState({ books })
	}

	handleDelBook(index) {
		const books = [...this.state.books]
		books.splice(index, 1)
		this.setState({ books })
	}

	render() {
		const { books } = this.state

		return (
			<div>
				{/* TransitionGroup 用于设置列表的过渡动画 */}
				<TransitionGroup component='ul'>
					{books.map((book, index) => {
						return (
							<CSSTransition
								key={book.id}
								timeout={{ enter: 1000, exit: 1000 }}
								classNames='content'>
								<li>
									name: {book.name}- price: {book.price}
									<button onClick={e => this.handleDelBook(index)}>移除</button>
								</li>
							</CSSTransition>
						)
					})}
				</TransitionGroup>
				<button onClick={e => this.handleAddBook()}>添加书籍</button>
			</div>
		)
	}
}

export default App
