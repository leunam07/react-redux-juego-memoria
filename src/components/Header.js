import './Header.css';

import { useDispatch, useSelector } from 'react-redux';

import { resetGameAction } from "../actions/gameActions";

export const Header = () => {

    const dispatch = useDispatch()
    const game = useSelector(state => state.game);

    const handleReset = () => {
        dispatch(resetGameAction());
    }    

    return (
        <header>
            <div className="title">React Memoria</div>
            <div>
                <a href="#" className="float btn-reset" onClick={handleReset}>
                    <i className="fa fa-refresh my-float fa-2x"></i>
                </a>
            </div>
            <div className="title">Intentos: {game.attempts}</div>
        </header>
    )  
}
