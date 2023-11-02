import { useState, useEffect } from 'react';
import './App.css';
import CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMosnsters] = useState([])
  const [filteredMonsters, setFilteredMonsters ] = useState(monsters)

  console.log('rerendered')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMosnsters(users))
  }, [])

  // We don't want the filtering to take place when there is no change on either monsters or searchField
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => { 
          return monster.name.toLowerCase().includes(searchField);
        });

    setFilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField]) // The dependecy to check if there is a change on the search field or monsters to do the filtering
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString);}

  return (
    <div className="App">
        <h1 className='app-title'>Monsters Cards</h1>
        <SearchBox onChangeHandler = { onSearchChange } placeholder = 'Search Monsters' className = 'monster-search-box' />
        <CardList monsters = { filteredMonsters } />
        
    </div>
  )
}

// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters : [],
//       searchField : '',
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     },
//     // () => {console.log(this.state)}
//     ));
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase()

//     this.setState(() => {
//       return { searchField };
//     })
//   }
//   render(){

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => { 
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Cards</h1>
//         <SearchBox onChangeHandler = { onSearchChange } placeholder = 'Search Monsters' className = 'monster-search-box' />
//         <CardList monsters = { filteredMonsters } />
        
//       </div>
//     );
//   }
// }

export default App;
