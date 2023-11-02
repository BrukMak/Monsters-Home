import './card-list.style.css';
import Card from '../card/card.component';
// import { Component } from 'react';


const CardList = (props) => {
    
        const { monsters } = props
        return (
            <div className="card-list" >
        {monsters.map((monster) => (

            <Card monster = {monster} />
        ) )}
    </div>
        );
    
}
// class CardList extends Component {
//     render () {
//         const { monsters } = this.props
//         return (
//             <div className="card-list">
//        {/* { console.log(monsters)} */}
//         {monsters.map((monster) => (

//             <Card monster = {monster} />
//         ) )}
//     </div>
//         );
//     }
// }
export default CardList ;