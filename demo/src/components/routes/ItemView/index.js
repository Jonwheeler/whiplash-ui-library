import React, { Component } from 'react';
import { Button, Modal, Navicon } from 'src';
import * as DemoComponents from './components';
import AppExample from 'demo/Example';
import geoLogo from '../images/whiplash-geo-logo-white.svg';
import './ItemView.css';


export default class ItemView extends Component {
  constructor() {
    super();

    // cache methods
    this._clickButton    = this._clickButton.bind(this);
    this._getComponent   = this._getComponent.bind(this);
    this._showModal      = this._showModal.bind(this);
    this._textInput      = this._textInput.bind(this);
    this._toCapitalize   = this._toCapitalize.bind(this);
    this._toggleDropdown = this._toggleDropdown.bind(this);
    this._toggleModal    = this._toggleModal.bind(this);
    this._updateLegend   = this._updateLegend.bind(this);

    this.state = {
      dropdownActive: false,
      modalActive: false,
      modalContent: null,
      uiComponent: null
    };
  }

  componentDidMount() {
    const { filterItemIfNeeded, params } = this.props;
    filterItemIfNeeded(params.name);
  }

  componentWillReceiveProps(nextProps) {
    const { filterItemIfNeeded, library } = this.props;

    if (library.selected.name !== nextProps.params.name) {
      filterItemIfNeeded(nextProps.params.name);
    }
  }

  // PRIVATE

  _toCapitalize(str) {
    let capsString = null;

    return str.replace(/\w\S*/g, function(txt) {
      capsString = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      return capsString.replace(/\s+/g, '');
    });
  }

  _clickButton(e) {
    console.log(e);
  }

  _getComponent() {
    const { dropdownActive } = this.state;
    const { library }   = this.props;
    const selectedName  = library.selected.name;
    const DemoComponent = DemoComponents[`Demo${ selectedName }`];
    const date = new Date();

    switch (selectedName) {
      case 'Breadcrumb':
        return <DemoComponent active={ selectedName } />;
      case 'Button':
        return <DemoComponent onCallback={ this._clickButton } />;
      case 'CheckButton':
        return <DemoComponent defaultChecked />;
      case 'Dropdown':
        return <DemoComponent open={ dropdownActive } onUpdate={ this._toggleDropdown } />;
      case 'Input':
        return <DemoComponent onInputChange={ this._textInput } />;
      case 'Legend':
        return <DemoComponent onCallback={ this._clickButton } />;
      case 'Modal':
        return <Button buttonText="open modal" theme="text" callback={ this._showModal } />;
      case 'Navicon':
        return <Navicon onUserInput={ this._clickButton } />;
      case 'Toggle':
        return <DemoComponent active />;
      default:
        return <DemoComponent />;
    }
  }

  _showModal() {
    this.setState({
      modalActive: true,
      modalContent: <AppExample />
    });
  }

  _textInput(val) {
    console.log(val);
  }

  _toggleModal(modalActive) {
    this.setState({ modalActive });
  }

  _toggleDropdown() {
    this.setState((prevState) => ({
      dropdownActive: !prevState.dropdownActive
    }));
  }

  _updateLegend(activeIndex) {
    console.log(`update state to: ${ activeIndex }`);
  }


  render() {
    const { library } = this.props;
    const { modalActive, modalContent, naviconActive } = this.state;
    const uiComponent = !!library.selected.name ? this._getComponent() : null;
    const currentItem = library.selected;

    return(
      <div className="ItemView">
        <header className="ItemView-header">
          <h3 className="ItemView-headline">
            { currentItem.name }
          </h3>

          <p className="ItemView-description">
            { currentItem.description }
          </p>
        </header>

        <div className="ItemView-feature">
          { uiComponent }
        </div>

        <div className="ItemView-feature">
          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">Example Usage</h3>
            <div>
              <code className="ItemView-code">
                { currentItem.component }
              </code>
            </div>
          </div>

          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">instructions</h3>
            <p className="ItemView-description">
              { currentItem.instructions }
            </p>
          </div>

          <div className="ItemView-section-wrapper">
            <h3 className="ItemView-title">notes</h3>
            <p className="ItemView-description">
              { currentItem.notes }
            </p>
          </div>
        </div>

        <Modal
          active={ modalActive }
          content={ modalContent }
          logo={ geoLogo }
          onCloseModal={ this._toggleModal }
        />
      </div>
    );
  }
}
