import React, { Component } from 'react'
import { Animated } from 'react-native'

export default class FadeInView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(-64)
    }
  }

  componentDidMount () {
    const { delay } = this.props;
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      delay: delay,
      duration: 500
    })
    .start()
  }

  render() {
    return (
      <Animated.View
        style={{marginLeft: this.state.fadeAnim}}>
        {this.props.children}
      </Animated.View>
    )
  }
}

FadeInView.propTypes = {
  children: React.PropTypes.object,
  delay: React.PropTypes.number,
}

/*
playing wiht opacity would as follow

import React, { Component } from 'react'
import { Animated } from 'react-native'

export default class FadeInView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount () {
    const { delay } = this.props;

    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      delay: delay,
      duration: 500
    })
    .start()
  }

  render() {
    return (
      <Animated.View
        style={{ opacity: this.state.fadeAnim }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

FadeInView.propTypes = {
  children: React.PropTypes.object,
  delay: React.PropTypes.number,
}
*/