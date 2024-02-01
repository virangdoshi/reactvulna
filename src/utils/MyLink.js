import React from 'react'
import { Link } from 'react-router'

class MyLink extends Link {
  render () {
    if (this.props.rendered === true || this.props.rendered === 'true') {
      return super.render()
    } else {
      return <span />
    }
  }
}

export default MyLink
