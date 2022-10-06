import { useFetchUsers } from '../bus/users/hooks/useFetchUsers';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import { PageHeader } from 'antd';
const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 150,
            sorter: (a, b) => a.name.localeCompare(b.name)
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
            sorter: (a, b) => a.city.localeCompare(b.city)
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
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (item) => <Link to={`/${item.key}`}>View Details</Link>,
        },

    ];
    
const ViewAllUsers = () => {
    const { data, isFetching, error } = useFetchUsers()
    const [users, setUsers] = useState()

    useEffect(() => {
        setUsers(data)
    }, [data])

    if (isFetching) {
        return (
            <div className='loader'>
                <Spin />
            </div>
        )
    }

    if (error) {
        console.error(error)
    }

    return (
        <>
            <PageHeader
                className="site-page-header"
                title="Users List"
            />
            <Table columns={columns} dataSource={users} pagination={false} scroll={{ x: 1800 }} />
        </>
    );
}

export default ViewAllUsers