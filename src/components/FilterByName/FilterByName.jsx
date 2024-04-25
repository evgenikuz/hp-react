import s from './FilterByName.module.css'

export const FilterByName = ({action, value}) => {
    return <div className={s.filterByName}>
        <p className={s.filterName}>Name</p>
        <input className={s.input} type='text' placeholder='Hermione' onChange={action} value={value}/>
    </div>
}