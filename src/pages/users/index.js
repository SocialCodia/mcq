import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../../components/header';
import { getUsers, updateUser } from '../../http';

const UsersPage = () => {

    const [users, setUsers] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await getUsers();
            if (res.success) {
                setUsers(res.data);
                setLoading(false);
            }
        })()
    }, [])

    const verifyUser = async (userId) => {
        const res = await updateUser({
            id: userId,
            status: 'verified'
        });
        if (res.success)
            toast.success(res.message);
        updateLocally(userId, 'verified');
    }

    const banUser = async (userId) => {
        const res = await updateUser({
            id: userId,
            status: 'banned'
        });
        if (res.success)
            toast.success(res.message);
        updateLocally(userId, 'banned');
    }

    const updateLocally = (id, status) => {
        const newUsers = users.map((x) => {
            if (x.id === id) {
                return { ...x, status: status };
            }
            else
                return { ...x };
        });
        setUsers(newUsers);
    }

    return (
        <>
            <Header />
            <div className='container'>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <h4>Loading....</h4>
                                : users.map((x, i) => {
                                    return <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{x.name}</td>
                                        <td>{x.email}</td>
                                        <td>{
                                            x.status === 'verified'
                                                ? <button onClick={() => banUser(x.id)} className='btn rounded-circle'> <i class="fa fa-check rounded-circle bg-primary text-white p-2"></i></button>
                                                : <button onClick={() => verifyUser(x.id)} className='btn rounded-circle'> <i class="fa fa-remove rounded-circle bg-danger text-white p-2"></i></button>
                                        }</td>
                                    </tr>
                                })
                        }
                    </tbody>
                </table>
            </div>

        </>
    );

}

export default UsersPage;