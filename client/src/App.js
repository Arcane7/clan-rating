import React, {Component} from 'react';
import ClanList from './ClanList.js';
import './style/ClanList.css';

class App extends Component {

    constructor(props) {
        super(props);

        /*this.state = {
            members:
                [{name: 'ZXC', race: 'Z'},
                    {name: 'SDFDSFSDF', race: 'T'},
                    {name: 'SSSS', race: 'P'}]
        };*/

        this.state = {
            members: []
        };
    }

    componentDidMount() {
        this.fetchMembers();
    }

    fetchMembers() {
        fetch('/api/members')
            .then(result => result.json())
            .then(items => this.setState({members: items.members}))
    };

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Clan Rating</h1>
                </header>
                <ClanList members={this.state.members}/>
            </div>
        );
    }
}

export default App;
