import PropTypes from "prop-types";
import styles from '../css/Transactions.module.css'


export function Transactions({props}){
return(<table className={styles.table}>
    <thead>
    <tr>
      <th className={styles.head}>Type</th>
      <th className={styles.head}>Amount</th>
      <th className={styles.head}>Currency</th>
    </tr>
  </thead>
        <tbody>
        {props.map(({type,amount,id,currency})=>(
            <tr key={id}>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tr>))}
    </tbody>
</table>
 )
}

Transactions.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency:PropTypes.string
  }