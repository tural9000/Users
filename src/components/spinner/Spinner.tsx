import styles from './spinner.module.scss'
const Spinner = () => {
    return (
        <div className={styles.spiner} role="status" >
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner;