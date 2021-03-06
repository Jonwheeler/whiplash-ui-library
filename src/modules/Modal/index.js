import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import 'animate.css';
import './Modal.css';

const propTypes = {
  active: PropTypes.bool,
  content: PropTypes.object,
  logo: PropTypes.string,
  modalWidth: PropTypes.string,
  onCloseModal: PropTypes.func
};

const defaultProps = {
  active: false,
  content: null,
  logo: '',
  modalWidth: '38.75rem'
};


export default class Modal extends Component {
  constructor(props) {
    super();

    // cache methods
    this._close = this._close.bind(this);
  }

  componentDidMount() {
    // allow exit on esc press
    document.body.onkeydown = (e) => {
      const evt = e || window.event;
      if (evt.keyCode === 27) {
        this._close();
      }
    };
  }

  componentWillUnmount() {
    document.body.onkeydown = null;
  }

  // PRIVATE

  _close() {
    const modal = document.querySelector('.Modal');
    const overlay = document.querySelector('.Modal-overlay');
    const content = document.querySelector('.Modal-content');

    content.classList.remove('fadeInDown');
    overlay.classList.remove('fadeIn');

    content.classList.add('fadeOutUp');
    overlay.classList.add('fadeOut');

    // wait till animation finished before de-activating
    window.setTimeout(() => {
      this.props.onCloseModal(false);
    }, 400);
  }


  render() {
    const { active, content, logo, modalWidth } = this.props;
    const ModalClass   = classnames('Modal', { active: !!active });
    const ContentClass = classnames('Modal-content animated', { fadeInDown: !!active, fadeOutUp: !!!active });
    const OverlayClass = classnames('Modal-overlay animated', { fadeIn: !!active, fadeOut: !!!active });
    const HeaderClass  = classnames('Modal-header', { hidden: !!!logo });
    const ContentStyle = { maxWidth: modalWidth };


    return (
      <div className={ ModalClass }>
        <div
          className={ OverlayClass }
          onClick={ this._close }
        />

        <div
          className={ ContentClass }
          style={ ContentStyle }
        >

          <div className={ HeaderClass }>
            <div className="Modal-logo-wrapper">
              <img
                alt="logo"
                className="Modal-logo"
                src={ logo }
              />
            </div>

            <span
              className="Modal-close-btn"
              onClick={ this._close }
            />
          </div>

          { content }
        </div>
      </div>
    );
  }

}


Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
