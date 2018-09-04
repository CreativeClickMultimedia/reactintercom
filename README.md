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
    ReactIc.initialize({
      app_id: 'd3vzmxvx'
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
