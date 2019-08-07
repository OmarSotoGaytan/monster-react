import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box-component';
import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      string: 'Hola Omar',
      estado: 1,
      monsters: [
       
      ],
      searchField: ''
    }
  }
  componentWillMount(){
    console.log("Hola");
  }
  componentDidMount(){
    console.log("Primero")
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
     return  response.json();
  }).then(users =>{
    console.log(users);
    this.setState({monsters: users});
  });
  }
  cambiaNombre(){
    if(this.state.estado===1)
    {
      this.setState({string: "Adios OmaR",estado:2});

    }else{
      this.setState({string: "Hola OmaR",estado:1});

    }
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster =>{
       return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (    
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monsters' handleChange={e => 
        {
          this.setState({searchField: e.target.value},()=>{


          });
        }}/>
      <CardList monsters={filteredMonster}/>
    
   
      
      </div>
  );
  }
}

export default App;
