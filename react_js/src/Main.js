import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom'
import Articles from './Articles';
import Tests from './Tests';
import Game from './Game';
import articles1 from './articles1';
import articles2 from './articles2';
import articles3 from './articles3';
import './index.css';

class Main extends Component {
    render() {
        return (
            <HashRouter>

            <div>
            <h1>React</h1>

            <ul className="header">
            <li><NavLink exact to="/">Статьи</NavLink></li>
            <li><NavLink to="/tests">Тесты</NavLink></li>
            <li><NavLink to="/game">Игра</NavLink></li>
            </ul>

            <div className="content">

            <Route exact path="/" component={Articles} />
            <Route path="/catalog" component={Tests} />
            <Route path="/contact" component={Game} />
            </div>

            </div>
            </HashRouter>
            );
        }
    }

    export default Main;