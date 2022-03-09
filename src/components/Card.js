import React from 'react'

function Card({ results }) {
    return(
        results.map(item => {
        return(
            <a href={`https://breakingbad.fandom.com/wiki/${item.name}`}>
            <div className='result'>
                <div className='character-image'>
                    <img src={item.img}/>
                </div>
                <div className='character-image hidden-info'>
                    <h1>{item.name}</h1>
                    <hr></hr>
                    <h4>Actor Name: {item.portrayed}</h4>
                    <h4>Nickname: {item.nickname}</h4>
                    <h4>Birthday: {item.birthday}</h4>
                    <h4>Status: {item.status}</h4>
                </div>
            </div>
            </a>
            )
        })
    )
}

export default Card