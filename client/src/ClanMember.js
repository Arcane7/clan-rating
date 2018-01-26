import React, {Component} from 'react';
import './style/ClanList.css';

class ClanMember extends Component {

    constructor(props) {
        super(props);

        if(this.props.member.race === "P") {
            this.raceClass = 'ProtossClass';
        }
        if(this.props.member.race === "T") {
            this.raceClass = 'TerranClass';
        }
        if(this.props.member.race === "Z") {
            this.raceClass = 'ZergClass';
        }
    }

    render() {
        return (
            <div className={'ClanMember ' + this.raceClass}>
                {this.props.member.name}
            </div>
        );
    }
}

export default ClanMember;
