import PropTypes from "prop-types";
import styles from '../css/FriendList.module.css'

export function FriendList({props}){
    return(
    <ul className={styles.friendList}>
    {props.map(({id,avatar,name,isOnline}) => (
      <li className={styles.item} key={id}>
    <span className={styles.status} style={isOnline === true  ? {backgroundColor:'green'} : {backgroundColor:'red'}}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
    ))}
  </ul>)
}

FriendList.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline:PropTypes.bool
  }