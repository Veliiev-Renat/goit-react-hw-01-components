import user from '../components/user.json'
import data from '../components/data.json'
import friends from '../components/friends.json'
import info from '../json/transactionss.json'
import {User} from '../components/Profile'
import {Statistics} from'../components/Statistics'
import {FriendList} from '../components/FriendList'
import { Transactions } from './Transactions'


export const App = () => {
  return (
    <>
    <User {...user}/>
    <Statistics title='Upload stats'stats={data}/>
    <FriendList props={friends}/>
    <Transactions props={info}/>
    </>
  );
};
