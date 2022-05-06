import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'
import { navigate } from './utils/constants'
// import { ReactComponent as ArrowRight } from './assets/images/svg/arrowRight.svg'
import MyImageSvg from './assets/images/svg/arrowRight.svg'

class Toolbar extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    views: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.node.isRequired,
    localizer: PropTypes.object,
    onNavigate: PropTypes.func.isRequired,
    onViewChange: PropTypes.func.isRequired,
  }

  render() {
    let { localizer: { messages }, label } = this.props

    return (
      <div className="rbc-toolbar">
        <button
          type="button"
          onClick={this.navigate.bind(null, navigate.PREVIOUS)}
        >
          <img src={MyImageSvg} className="left" />
          {/* {messages.previous} */}
        </button>
        {/* <div className="rbc-btn-group"> */}
        {/* <button
            type="button"
            onClick={this.navigate.bind(null, navigate.TODAY)}
          >
            {messages.today}
          </button> */}

        {/* </div> */}

        <span className="rbc-toolbar-label">{label}</span>

        {/* <span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span> */}
        <button type="button" onClick={this.navigate.bind(null, navigate.NEXT)}>
          <img src={MyImageSvg} />

          {/* {messages.next} */}
        </button>
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onViewChange(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <button
          type="button"
          key={name}
          className={cn({ 'rbc-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ))
    }
  }
}

export default Toolbar
