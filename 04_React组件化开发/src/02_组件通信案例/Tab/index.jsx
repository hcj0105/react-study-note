import React, { Component } from 'react'


export class Tab extends Component {

  tabClick(tabIndex) {
    this.props.tabClick(tabIndex)
  }

  render() {
    const { titles, tabIndex } = this.props

    return (
      <div className='tab'>
        {
          titles.map((title, index) => {
            const classNames = index === tabIndex ? 'item active' : 'item'
            return (
              <div 
                className={classNames} 
                key={title}
                onClick={() => this.tabClick(index)}
              >
                <span>{title}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Tab