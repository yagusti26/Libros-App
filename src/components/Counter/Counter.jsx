import React, { useEffect, useState } from 'react';
import s from './Counter.module.css';

const Counter = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(1);
    // eslint-disable-next-line
    const [bool, setBool] = useState(false);
    const [btn, setBtn] = useState('Add to Cart');

    const suma = () => {
        count !== stock && setCount(count + 1);
    };
    const resta = () => {
        count !== initial && setCount(count - 1);
        
        
    };

    const handleButton = () => {
        setBtn('Otra cosa');

        /*setTimeout(() => {
            setBtn('');
        }, 2000); */
    };

    useEffect(() => {
        console.log('me rendericé');

        return () => {
            //todo lo que sucede acá se ejecuta antes del primer renderizado
        };
    }, []);

    return (
        <section className={s.containerCounter}>
            <div className={s.containerButtons}>
                <button disabled={bool} onClick={resta}>
                    -
                </button>
                <p>{count}</p>
                <button disabled={bool} onClick={suma}>
                    +
                </button>
            </div>
            <div className={s.containerAdd}>
                <button onClick={handleButton}>{btn}</button>
                
            </div>

            <br/>
            <div className={s.containerAdd}>
                <button onClick={() => onAdd(count)}>Terminar compra</button>
            </div>
        </section>
    );
};

export default Counter;
