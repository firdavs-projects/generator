import React, { useState } from 'react'
import './generator.css'

export default function Generator() {

    const [count, setCount] = useState(1);
    const [from, setFrom] = useState(1);
    const [to, setTo] = useState(10);
    const [repeat, setRepeat] = useState(false);
    const [random, setRandom] = useState(false);

    const [result, setResult] = useState('');

    const submitHandler = (ev) => {
        ev.preventDefault();
        if (count > 0 && from > 0 && to > 0 && to > from) {
            fetch(`https://www.random.org/integers/?num=${count}&min=${from}&max=${to}&col=1&base=10&format=plain&rnd=new`)
                .then(res => {
                    // setResult(res);
                    console.log(res);
                });
        }
    }

    const changeHandler = (ev) => {
        const { name, value } = ev.target;
        if (value < 0) return;
        switch (name) {
            case 'count':
                setCount(value);
                break;
            case 'from':
                setFrom(value);
                break;
            case 'to':
                setTo(value);
                break;
            default:
                break;
        }
    }

    return (
        <div className='generator container'>
            <form className='generator_form'>

                <label className='generator_input'>
                    Количество чисел
                    <input type={'number'} value={count} name='count' onChange={changeHandler} />
                </label>

                <label className='generator_input'>
                    Диапазон от
                    <input type={'number'} value={from} name='from' onChange={changeHandler} />
                    до
                    <input type={'number'} value={to} name='to' onChange={changeHandler} />
                </label>

                <label className='generator_input'>
                    Исключить повторения
                    <input type={'checkbox'} value={repeat} onChange={() => setRepeat(!repeat)} />
                </label>

                <label className='generator_input'>
                    Ещё больше случайности
                    <input type={'checkbox'} value={random} onChange={() => setRandom(!random)} />
                </label>

                <button className='generator_submit' type="submit" onClick={submitHandler}>Сгенерировать</button>

            </form>
            <div className='generator_result'>
                {result}125, 425, 675, 825, 975
            </div>
        </div>
    )
}
