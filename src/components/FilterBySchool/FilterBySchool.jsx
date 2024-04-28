import s from './FilterBySchool.module.css'

export const FilterBySchool = ({action}) => {
    return <div className={s.filterBySchool}>
    <p className={s.filterName}>School</p>
    <select className={s.select} onChange={action}>
        <option value='' disabled selected>Choose one</option>
        <option>Gryffindor</option>
        <option>Slytherin</option>
        <option>Hufflepuff</option>
        <option>Ravenclaw</option>
    </select>
</div>
}