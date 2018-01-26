import React, {Component} from 'react';
import ClanMember from './ClanMember.js';
import './style/ClanList.css';

class ClanList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ClanList">
                {this.props.members.map((member) =>
                    <ClanMember member={member}/>
                )}
            </div>
        );
    }
}

export default ClanList;
