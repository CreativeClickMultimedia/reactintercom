# react intercom

## Usage

## Installation

With [npm](https://www.npmjs.com/):
```bash
npm install reactintercomlib --save
```

### With reactjs

Initializing IC and using widget in component:

```js
import ReactIc from 'reactintercomlib'

class App extends Component {
  componentDidMount() {
    const otherOptions = {
      first_name: 'John',
      last_name: 'Doe'
    }
    ReactIc.initialize({
      app_id: 'd3vzmxvx',
      hide_default_launcher: false,
      ...otherOptions
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```
[![DEMO](https://github.com/CreativeClickMultimedia/reactintercom/blob/master/intercomwidgetscreenshot.png)](https://github.com/CreativeClickMultimedia/reactintercom/blob/master/intercomwidgetscreenshot.png)
