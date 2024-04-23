import s from './Card.module.css'

export const Card = ({src, alt, characterName, actorName, gender, house, wand, isAlive}) => {
    return <div className={s.card}>
        <img src={src} alt={alt} className={s.photo}/>
        <div className={s.about}>
            <h2 className={s.name}>{characterName}</h2>
            <p className={s.actorName}>Actor: {actorName}</p>
            <p className={s.gender}>Gender: {gender}</p>
            <p className={s.house}>House: {house}</p>
            <p className={s.wand}>Wand core: {wand}</p>
            <p className={s.isAlive}>Alive: {isAlive}</p>
        </div>
    </div>
}