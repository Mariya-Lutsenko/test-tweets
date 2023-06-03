import styles from './Users.module.css';
import { getUsers } from 'services/api';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserCard from 'components/UserCard/UserCard';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [followingList, setFollowingList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const storedFollowingList = JSON.parse(localStorage.getItem("following"));
        setFollowingList(storedFollowingList || [])
    }, [])

    const fetchUsers = async () => {
        try {
            setIsLoading(true);
            const response = await getUsers(page);
            console.log(response);
            setUsers((prevUsers) => {
                const newUsers = response.filter((newUser) => !prevUsers.some((existingUser) => existingUser.id === newUser.id));
                return [...prevUsers, ...newUsers];
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [page]);

    // useEffect(() => {
    //     let updatedUsers = users;
    // }, [users,  followingList]);

    // const onClickBtn = () => {
    //     setPage(page + 1);
    // };

    return (
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                {users.map(({avatar, user, tweets, followers, id }) => {
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
                    )
                })}
            </ul>

        </div>
    )
}


export default Users;