import { useState, useEffect } from 'react';
import '../../../assets/css/utable.css';
import { getUsers} from '../../services/auth';
import axios from 'axios'; // Import deleteUser function from your service
import AdminNavBar from '../../services/AdminNavbar';

const UserTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(response => {
                console.log(response);
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const handleDelete = async (useremail) => {
        try {
            await axios.delete(`http://localhost:8181/api/v1/user/delete/${useremail}`) // Call the deleteUser function passing the userId
            // After successful deletion, update the users list by refetching it
            const response = await getUsers();
            setUsers(response.data);
            console.log('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const filteredUsers = users.filter(user => user.role === 'USER');

    return (
        <div>
        <AdminNavBar/>
            <h2 style={{ paddingTop:'40px',textAlign: 'center', margin: 'auto', width: '60%' }}>All Users</h2>
            <table className='utable'  style={{ backgroundColor: 'white' }}>
                <thead className='uthead'>
                    <tr>
                        <th className='uthead'>User Name</th>
                        <th className='uthead'>User Email</th>
                        <th className='uthead'>User Phone</th>
                        <th className='uthead'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr className='utrow' key={user.id}>
                            <td className='utdata'>{user.name}</td>
                            <td className='utdata'>{user.email}</td>
                            <td className='utdata'>{user.phone}</td>
                            <td className='utdata' >
                                <button className='utbttn' onClick={() => handleDelete(user.email)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
