import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class Articles extends Component {
    render() {
        return (
            <div>
            <h2>Статьи</h2>
            <div> 

            <ul className="Articles">
            <li className="articles_1"><NavLink exact to="/articles1">Статья 1</NavLink></li>
            </ul>

            <ul className="Articles">
            <li className="articles_1"><NavLink exact to="/articles2">Статья 2</NavLink></li>
            </ul>

            <ul className="Articles">
            <li className="articles_1"><NavLink exact to="/articles3">Статья 3</NavLink></li>
            </ul>

            </div>
            </div>
            );
        }
    }

    export default Articles;