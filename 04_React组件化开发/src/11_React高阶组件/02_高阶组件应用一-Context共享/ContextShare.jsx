import React, { PureComponent } from 'react'
import ThemeContext from '../Context/theme_context'
import Product from './Product'

export class ContextShare extends PureComponent {
  render() {
    return (
      <div>
        <h2>高阶组件应用一: Context共享</h2>
        <ThemeContext.Provider value={{ color: 'red', fontSize: 20 }}>
          <Product/>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default ContextShare