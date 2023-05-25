import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/layouts'
import { Button, Card, TierRating } from '../../components/interface'
import { ArrowLeft, Profile } from '../../components/icons'
import { convertToThousands } from '../../lib/utils';

const Users: React.FC = () => {
    // const { username } = useParams<{ username: string }>();

    return (
        <DashboardLayout>
            <div className='user-details'>
                <Button variant='naked'>
                    <Link to='/customers/users' className='back-to-users'>
                        <ArrowLeft />
                        <span>Back to Users</span>
                    </Link>
                </Button>
                <div className='user-details-header'>
                    <h1>Users Details</h1>
                    <div className='user-details-btns'>
                        <Button
                            className='btn blacklist'
                            variant='outlined'
                        >
                            Blacklist User
                        </Button>
                        <Button
                            className='btn activate'
                            variant='outlined'
                        >
                            Activate User
                        </Button>
                    </div>
                </div>
                <Card className='user-details-card-highlight'>
                    <div className='user-profile'>
                        <div className='user-profile-icon'>
                            <Profile />
                        </div>
                        <div className='user-profile-identity'>
                            <h2>Grace Effiom</h2>
                            <span>LSQFf587g90</span>
                        </div>
                        <div className='user-profile-tier'>
                            <h2>User’s Tier</h2>
                            <TierRating starredStars={2} />
                        </div>
                        <div className='user-profile-funds'>
                            <h2>₦{convertToThousands(200000.00)}</h2>
                            <span>9912345678/Providus Bank</span>
                        </div>
                    </div>
                    <div className='user-tabs'></div>
                </Card>
                <Card className='user-details-card-info'>
                    <div></div>
                </Card>
            </div>
        </DashboardLayout>
    )
}

export default Users