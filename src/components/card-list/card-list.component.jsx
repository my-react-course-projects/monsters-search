import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class MonstersList extends Component {

    render() {

        const { monsters } = this.props;

        return (
           <div className="card-list">
                { monsters.map((monster) => {
                    return (
                        <Card monsterData={monster}/>
                    );
                })}
           </div>
        );
    }
}

export default MonstersList;