import { Container } from '../Container/Container'
import {Card} from '../Card/Card'
import s from './Main.module.css'
import {data} from './data.js'

export const Main = ({searchText}) => {
    return <Container>
        <div className={s.cardContainer}>
            {data
            .filter((el) => el.name.toLowerCase().includes({searchText}))
            .map((el) => <Card src={el.image} alt={el.name} characterName={el.name} actorName={el.actor} gender={el.gender} house={el.house} wand={el.wand.core} isAlive={el.alive === true ? 'yes' : 'no'}/>)}
        </div>
    </Container>
}