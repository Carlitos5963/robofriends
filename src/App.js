import React, { Component } from 'react';
import CardList from './CardList';
import robots from './robots';
import SearchBox from './SearchBox';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };
    }

    //Listener function used to update based on searchbox input
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    
    render(){
        //This filters the robot list with what is typed into the search box
        const filteredRobots = this.state.robots.filter(robot => {
            return ( robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()) )
        });

        //Return the title, searchbox, and filtered list of robots
        if(filteredRobots.length === 0){
            var results = <h2>No robots found</h2>
        }
        else{
            results = <CardList robots={filteredRobots} />
        }

        return (
            <div className='tc'>
                <h1>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {results}
            </div>
        );
    }
}

export default App;