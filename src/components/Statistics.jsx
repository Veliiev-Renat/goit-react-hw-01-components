import PropTypes from "prop-types";
import styles from '../css/Statistics.module.css'

export function Statistics({title,stats}){
    return(
        <section className={styles.statistics}>
  {title &&(<h2 className={styles.title}>{title}</h2>)}

  <ul className={styles.list}>
    <li className={styles.item} style={{backgroundColor:'rgb(39, 167, 226)'}}>
      <span className={styles.label}>{stats[0].label}</span>
      <span className={styles.percentage}>{stats[0].percentage}</span>
    </li>
    <li className={styles.item} style={{backgroundColor:'rgb(217, 99, 237)'}}>
      <span className={styles.label}>{stats[1].label}</span>
      <span className={styles.percentage}>{stats[1].percentage}</span>
    </li>
    <li className={styles.item} style={{backgroundColor:'rgb(225, 84, 84)'}}>
      <span className={styles.label}>{stats[2].label}</span>
      <span className={styles.percentage}>{stats[2].percentage}</span>
    </li>
    <li className={styles.item} style={{backgroundColor:'rgb(95, 247, 247)'}}>
      <span className={styles.label}>{stats[3].label}</span>
      <span className={styles.percentage}>{stats[3].percentage}</span>
    </li>
  </ul>
</section>)
}

Statistics.propTypes = {
    stats:PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.string}
    )),
  }