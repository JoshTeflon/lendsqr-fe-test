import React from 'react'
import { Link } from 'react-router-dom'
import { DashboardLayout } from '../../components/layouts'
import { Button, Card, StatusPill } from '../../components/interface'
import { UserDataItem, UserInfoItem, getUsersData, getUsersInfo } from '../../lib/data/getUsersData'
import { HexToRgba, convertToThousands, formatDate, formatToLink } from '../../lib/utils'
import { Filter, Options } from '../../components/icons'

const Users: React.FC = () => {
    const tableHeaders = ['organization', 'username', 'email', 'phone number', 'date joined', 'status']

    return (
        <DashboardLayout>
            <div className='users'>
                <h1>Users</h1>
                <div className='users-data-wrapper'>
                    {
                        getUsersData()?.map((i: UserDataItem) => {
                            return (
                                <Card className='users-data-card' key={i.category}>
                                    <div
                                        className='users-data-card-icon-wrapper'
                                        style={{ color: i.color, background: HexToRgba(i.color, 0.1) }}
                                    >
                                        <i.icon />
                                    </div>
                                    <h2>{i.category}</h2>
                                    <span>{convertToThousands(i.total)}</span>
                                </Card>
                            )
                        })
                    }
                </div>
                <Card className='users-data-table'>
                    <table>
                        <thead>
                            <tr>
                                {
                                    tableHeaders?.map((h: string) => {
                                        return (
                                            <th key={h}>
                                                <span>{h}</span>
                                                <Filter />
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getUsersInfo()?.map((j: UserInfoItem, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td>{j.organisation}</td>
                                            <td>{j.username}</td>
                                            <td>{j.email}</td>
                                            <td>{j.phoneNumber}</td>
                                            <td>{formatDate(j.date)}</td>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '7.5rem' }}>
                                                    <StatusPill status={j.status} />
                                                    <Button
                                                        style={{ marginTop: '0.25rem' }}
                                                        variant='naked'
                                                    >
                                                        <Link to={`/customers/users/${formatToLink(j.username)}`}>
                                                            <Options />
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Card>
            </div>
        </DashboardLayout>
    )
}

export default Users