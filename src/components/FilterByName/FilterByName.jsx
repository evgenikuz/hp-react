import s from './FilterByName.module.css'

export const FilterByName = () => {
    return <div className={s.filterByName}>
        <p className={s.filterName}>Name</p>
        <input className={s.input} type='text' placeholder='Hermione'/>
    </div>
}