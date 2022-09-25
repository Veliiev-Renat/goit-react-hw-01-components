import user from '../json/user.json'
import data from '../json/data.json'
import friends from '../json/friends.json'
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
