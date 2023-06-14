import { Component } from 'react';
import './App.css';
import Search from './components/search-box/search-box.component';
import MonstersList from './components/card-list/card-list.component';

class App extends Component {

  constructor() {

    super()

    this.state = {

      monsters : [],
      searchString: ''

    }

  }
  


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>  response.json()  )
      .then((users) => {

        this.setState(
          () => {
            return { monsters : users };
          },
          () => {
            console.log( this.state );
          }
        )

      } )
  }


  onChangeHandler = (event) => {
    const searchString = event.target.value.toLocaleLowerCase()
   
    this.setState(() => {
      return { searchString }
    })
  }

  render () {

    const { monsters, searchString } = this.state;
    const { onChangeHandler } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString)
     })


    return (
        <div className="App">
            <h1 className='app-title'>Finding Monsters</h1>
            <Search className='monster-search-box'
                    placeholder='Search Monsters'
                    onChange={onChangeHandler} />
            <MonstersList monsters={filteredMonsters} />
          {/* <button onClick={() => { this.setState({ name: 'Gadkar' })}} >CLick Me to chanfe Name</button> */}
        </div>
      );

   }

}  


export default App;
