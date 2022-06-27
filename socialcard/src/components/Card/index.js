import React from 'react'
import styles from './Card.modules.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)

const Card = () => {
    return (
        <>
            <h1>Add New Card</h1>
            <div className={cx('header-card')}>

                <p>Avatar</p>
                <input type='upload' />
                <p>Name</p>
            </div>
            <div className={cx('description-card')}>
                <p>description</p>
                <span>Icon Heard</span>
            </div>
        </>
    )
}

export default Card