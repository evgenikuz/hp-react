import s from './Header.module.css'
import { Container } from '../Container/Container'
import { FilterByName } from '../FilterByName/FilterByName'
import { FilterBySchool } from '../FilterBySchool/FilterBySchool'

export const Header = ({text, searchText, school, chosenSchool}) => {
    
    
    return <Container>
        <h1 className={s.title}>Harry Potter</h1>
        <p className={s.description}>View all characters from the Harry Potter universe</p>
        <div className={s.filters}>
            <FilterByName value={text} action={((event) => searchText(event.target.value) )}/>
            <FilterBySchool  action={(event) => chosenSchool(event.target.value)}/>
        </div>
    </Container>
    
}