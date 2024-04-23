import s from './FilterBySchool.module.css'

export const FilterBySchool = () => {
    return <div className={s.filterBySchool}>
    <p className={s.filterName}>School</p>
    <select className={s.select}>
        <option>Gryffindor</option>
        <option>Slytherin</option>
        <option>Hufflepuff</option>
        <option>Ravenclaw</option>
    </select>
</div>
}