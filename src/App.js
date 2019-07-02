import React from 'react';
// import logo from './logo.svg';
import './App.css';

const dice = (sides) => Math.random() * sides + 1 | 0
const d6 = () => dice(6)
const minD6From3 = () => {
  const randomD6 = Array(3).fill(0).map(() => d6())
  return randomD6.reduce((p, c) => p < c ? p : c)
}
const randomTables = () => {
  const tables = []
  const TABLES_COUNT = 10
  for (let i = 0; i < TABLES_COUNT; i++) {
    const table = []
    for (let j = 0; j < 20; j++) table.push(`table_${i}_cell_${j}`)
    tables.push(table)
  }
  return tables
}


// const stats = Array(6).fill(0).map(() => minD6From3())
// const tables = randomTables()
// console.log(stats)
// console.dir(tables)
function Table(props) {
  const rows = props.value.map((v, i) => (<tr key={i*100+v}><td>{v}</td></tr>))
  return (
    <table>
      <tbody>
      {rows}
      </tbody>
    </table>
  )
}
function Dice(props) {
  return <p><span className="Dice">{props.value}</span> + 10 = {props.value + 10}</p>
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.tables = randomTables()
    this.rollDices = this.rollDices.bind(this)
    this.toggleDices = this.toggleDices.bind(this)
    this.randomizeTables = this.randomizeTables.bind(this)
    this.state = {
      stats: [],
      tablesIndices: [],
      showStats: true,
    }
  }
  rollDices() {
    this.setState({stats: Array(6).fill(0).map(() => minD6From3())})
  }
  toggleDices() {
    this.setState({showStats: !this.state.showStats})
  }
  randomizeTables() {
    this.setState({
      tablesIndices: this.tables.map(t => 
        Math.random() * t.length | 0)
      })
  }
  render() {
    const statsValues = this.state.tablesIndices.map((v, i) => 
      this.tables[i][v])
    const dices = this.state.stats.map((v, i) => <Dice key={i*10+v} value={v}/>)
    const showStats = this.state.showStats
    return (
    <div className="App">
      <button onClick={this.rollDices}>Кинуть кубики</button>
      <button onClick={this.randomizeTables}>Взять случайные данные из таблиц</button>
      <button onClick={this.toggleDices}>Скрыть/показать кубики</button>
      <Table value={statsValues} />
      <div className="dices">
        {showStats ? dices : false}
      </div>
    </div>
    )
  }
}

export default App;
