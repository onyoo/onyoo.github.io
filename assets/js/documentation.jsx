class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}


class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <button className="square"
              onClick={() => this.setState({value:"X"})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

var Router = ReactRouterDOM.Route;
var Link = ReactRouterDOM.Link;
var Route = ReactRouterDOM.Route;

ReactDOM.render(
    <Router>
      <div>
        <aside>
          <Link to={`/`}>Dashboard</Link>
          <Link to={`/about`}>About</Link>
        </aside>

        <HelloMessage name="Roberto" />

        <main>
          <Route path="/tick" component={Game} />
        </main>

        // <Game />
      </div>
    </Router>,
  document.getElementById('hello-example')
);
