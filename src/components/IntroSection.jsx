import React from 'react'

/*export default function IntroSection () {
    return (
        <section className="container">
            <h1>Основной заголовок</h1>
            <h3 style={{color: 'red'}}>Подзаголовок основного заголовка</h3>
        </section>
    )
}*/

export default function IntroSection () {
    return React.createElement('section', null, 
        [
            React.createElement('h1', {className: 'center', key: 1}, 'Основной заголовок'), 
            React.createElement('h3', {className: 'center', style: {color: 'red'}, key: 2}, 'Подзаголовок основного заголовка')
        ]
    )
}