import React from 'react';
import ReactDOM from 'react-dom';
import contrast from 'get-contrast';
import copyTextToClipboard from 'copy-text-to-clipboard';
import { hex2lch } from '@csstools/convert-colors';
import * as Generator from '../dist/palette-generator';

class Palette extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return /^[a-fA-F0-9]{6}$/.test(nextProps.sourceColor);
  }

  renderDisabled() {
    const { type } = this.props;
    let palette = [];

    switch (type) {
      case 'light':
        palette = ['FAFAFA', 'F5F5F5', 'EEEEEE', 'E0E0E0', 'D6D6D6', 'C9C9C9', 'BDBDBD', 'B0B0B0', 'A3A3A3', '969696'];
        break;
      case 'dark':
        palette = ['595959', '545454', '4F4F4F', '474747', '404040', '383838', '303030', '292929', '1F1F1F', '121212'];
        break;
    }

    return (
      <div className="color-palette--disabled">
        <div className="color-palette__label">{type}</div>
        <div className="color-palette__row">
          {palette.reverse().map((color, i) => {
            const cellClass = `color-palette__cell`;
            const cellStyle = {
              backgroundColor: `#${color}`,
            };

            return (<div key={i} style={cellStyle} className={cellClass}/>);
          })}
        </div>
        <div className="color-palette__row">
          {['900', '800', '700', '600', '500', '400', '300', '200', '100', '50'].map((shade, i) => {
            return (
              <div key={i} className="color-palette__color-weight-label">{shade}</div>
            )
          })}
        </div>
      </div>
    );
  }

  renderPalette() {
    const { type, sourceColor } = this.props;
    let palette;

    switch (type) {
      case 'light':
        palette = Generator.generateLightPalette(sourceColor);
        break;
      case 'dark':
        palette = Generator.generateDarkPalette(sourceColor);
        break;
      case 'accent':
        palette = Generator.generateAccentPalette(sourceColor);
        break;
    }

    return (
      <div>
        <div className="color-palette__label">{type}</div>
        <div className="color-palette__row">
          {palette.reverse().map((color, i) => {
            const whiteRatio = contrast.ratio(`#${color}`, '#fff');
            const darkRatio = contrast.ratio(`#${color}`, '#000');

            const cellClass = `color-palette__cell ${color === sourceColor ? 'color-palette__cell--selected' : ''}`;
            const cellStyle = {
              backgroundColor: `#${color}`,
              color: whiteRatio > darkRatio ? '#fff' : '#000',
            };

            return (
              <div key={i} style={cellStyle} className={cellClass} onClick={() => {
                copyTextToClipboard(`#${color}`);
              }}>
                <div className="color-palette__swatch-label">P</div>
                <div className="color-palette__cell-hex-value">#{color}</div>
              </div>
            );
          })}
        </div>
        <div className="color-palette__row">
          {['900', '800', '700', '600', '500', '400', '300', '200', '100', '50'].map((shade, i) => {
            return (
              <div key={i} className="color-palette__color-weight-label">{shade}</div>
            )
          })}
        </div>
      </div>
    );
  }

  render() {
    const { disabled } = this.props;
    return disabled ? this.renderDisabled() : this.renderPalette();
  }
}

class ClipboardNotification extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    document.addEventListener('copy', (e) => {
      this.setState({
        visible: true,
      });

      setTimeout(() => {
        this.setState({
          visible: false,
        });
      }, 300);
    })
  }

  render() {
    const { visible } = this.state;
    const notificationClass = `clipboard-confirmation ${visible ? 'clipboard-confirmation--visible' : ''}`;
    return (
      <div className={notificationClass}>Color copied to clipboard</div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '#fafafa',
      sourceColor: 'fafafa'
    };
  }

  render() {
    const { userInput, sourceColor } = this.state;
    const lchColor = hex2lch(sourceColor);
    const isDark = lchColor[0] <= 37.8;
    const isLight = lchColor[0] >= 62;
    const isGrey = lchColor[1] <= 30;

    return (
      <div className="color-tool">
        <ClipboardNotification/>
        <h1 className="page-title">Palette Generator</h1>
        <input value={userInput} onChange={(e) => {
          const nextUserInput = e.target.value;
          let nextColor;
          if (/^[a-fA-F0-9]{6}$/.test(nextUserInput)) nextColor = nextUserInput;
          else if (/^#[a-fA-F0-9]{6}$/.test(nextUserInput)) nextColor = nextUserInput.substr(1);

          this.setState({
            userInput: nextUserInput,
            sourceColor: nextColor || sourceColor,
          });
        }}/>
        <Palette type="accent" sourceColor={sourceColor} disabled={false}/>
        <Palette type="light" sourceColor={sourceColor} disabled={!isLight || !isGrey}/>
        <Palette type="dark" sourceColor={sourceColor} disabled={!isDark || !isGrey}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root-container'));

