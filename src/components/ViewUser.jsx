import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const ViewUser = () => {
    const { id } = useParams();
    const [users, setUsers] = useState()
    const [user, setUser] = useState()
    const { data } = useSelector((state) => state.users);

    useEffect(() => {
        if (data) {
            const results = data.map((item) => ({
                key: String(item?.id),
                name: item?.name,
                email: item?.email,
                city: item?.address.city,
                suite: item?.address.suite,
                street: item?.address.street,
                zipcode: item?.address.zipcode,
                phone: item?.phone
            }))
            setUsers(results)
            setUser(results.filter(item => item.key === id))
        }
    }, [data, id])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, item) => <Link to={`/${item.key}`}>{text}</Link>,
            width: 150,
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
            width: 250,
        },
        {
            title: 'city',
            dataIndex: 'city',
            key: 'city',
            width: 150,
        },
        {
            title: 'suite',
            dataIndex: 'suite',
            key: 'suite',
            width: 150,
        }, {
            title: 'street',
            dataIndex: 'street',
            key: 'street',
            width: 150,
        },
        {
            title: 'zipcode',
            dataIndex: 'zipcode',
            key: 'zipcode',
            width: 150,
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
            width: 200,
        }
    ];

    return (
        <>
            <Table columns={columns} dataSource={user} pagination={false} />
            <hr />
            <Table columns={columns} dataSource={users} pagination={false} />
        </>
    )
}

export default ViewUser