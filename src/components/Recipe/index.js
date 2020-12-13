import React from 'react'

import style from './recipe.module.css'

export default function Recipe({ title, image, ingredients }) {
    return (
        <div className={style.recipe}>
                <h1>{title}</h1>
            <div className={style.container}>
                <img className={style.image} src={image} />
                <ul className={style.list}>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
