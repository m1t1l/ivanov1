import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { minD6From3 } from './dice';
import Inventory from './inventory';

function RowFromObject(props) {
  const v = props.value
  console.dir(v)
  const rows = typeof v === "string" ?
    (<tr>
      <td>{v}</td>
    </tr>) :
    Object.keys(v).map(key => (
    <tr>
      <td>{key}</td>
      <td>{v[key]}</td>
    </tr>))
  return rows
}
function Item(props) {
  return (<span>{props.value}</span>)
}
function Table(props) {
  const objects = props.values
  const rows = objects.map((v, i) => (<RowFromObject value={v}/>))
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
    this.rollDices = this.rollDices.bind(this)
    this.toggleDices = this.toggleDices.bind(this)
    this.randomizeHero = this.randomizeHero.bind(this)
    this.inventory = new Inventory()
    this.state = {
      hero: this.inventory.createRandomHero(),
      dices: [],
      showStats: true,
    }
  }
  rollDices() {
    this.setState({dices: Array(6).fill(0).map(() => minD6From3())})
  }
  toggleDices() {
    this.setState({showStats: !this.state.showStats})
  }
  randomizeHero() {
    this.setState({
      hero: this.inventory.createRandomHero()
    })
  }
  render() {
    const hero = Object.assign({
      health: 0,
      perks: {},
      armors: {},
      inventory: []
    }, this.state.hero)
    const inventoryItems = hero.inventory.map(v => <Item value={v}/>)
    const dices = this.state.dices.map((v, i) => <Dice key={i*10+v} value={v}/>)
    const armors = Object.keys(hero.armors).map(key => ({[key]: hero.armors[key].name}))
    const armorValue = Object.keys(hero.armors).reduce((p, c) => hero.armors[p].defence + hero.armors[c].defence)
    const health = this.state.hero.health
    const showStats = this.state.showStats
    return (
    <div className="App">
      <button onClick={this.randomizeHero}>Создать героя</button>
      <button onClick={this.toggleDices}>Скрыть/показать кубики</button>
      <button onClick={this.rollDices}>Кинуть кубики</button>
      <h2>Защита</h2>
      <Table values={armors} />
      <p className="Inventory">Защита: <span>{armorValue}</span>. Жизней: <span>{health}</span></p>
      <h2>Инвентарь</h2>
      <p className="Inventory">
        {inventoryItems}
      </p>
      <h2>Особенности</h2>
      <Table values={hero.perks} />
      <div className={showStats ? "dices" : "dices hidden"}>
        <h2>Кубики</h2>
        {dices}
      </div>
    </div>
    )
  }
}

export default App;
