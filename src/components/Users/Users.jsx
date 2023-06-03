import styles from './Users.module.css';
import PropTypes from 'prop-types';
import { getUsers } from 'services/api';
import { useEffect, useState } from 'react';
import UserCard from 'components/UserCard/UserCard';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import Loader from 'components/Loader/Loader';

const Users = ({filter}) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [followingList, setFollowingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const storedFollowingList = JSON.parse(localStorage.getItem('following'));
    setFollowingList(storedFollowingList || []);
  }, []);


  useEffect(()=> {
    const fetchUsers = async () => {
        try {
          setIsLoading(true);
          const response = await getUsers(page);
          setUsers(prevUsers => {
            const newUsers = response.filter(
              newUser =>
                !prevUsers.some(existingUser => existingUser.id === newUser.id)
            );
            return [...prevUsers, ...newUsers];
          });
        } catch (error) {
          console.error('Error fetching users:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchUsers()
  }, [page]) 

  useEffect(() => {
    let updatedUsers = users;
    if (filter === 'show all') {
        updatedUsers = users;
    } else if (filter === 'follow') {
        updatedUsers = users.filter((user) => !followingList.includes(user.id));
    } else if (filter === 'followings') {
        updatedUsers = users.filter((user) => followingList.includes(user.id));
    }
    setFilteredUsers(updatedUsers);
}, [users, filter, followingList]);



  const onClickBtn = () => {
    setPage(prevPage => prevPage + 1);
};

  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {filteredUsers.map(({ avatar, user, tweets, followers, id }) => {
          return (
            <UserCard
              key={id}
              id={id}
              user={user}
              tweets={tweets}
              followers={followers}
              src={avatar}
              followingList={followingList}
              setFollowingList={setFollowingList}
            />
          );
        })}
      </ul>
      {isLoading && <Loader/>}
      {filteredUsers.length > 0 && <ButtonLoadMore onClick={onClickBtn} /> }
 
    </div>
  );
};

Users.propTypes = {
  filter: PropTypes.string.isRequired,
};
export default Users;
