import React from 'react';
import { UsersOutline, GroupUsersOutline, UsersLoan, UsersSavings } from '../../components/icons';

export interface UserDataItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  category: string;
  total: number;
}

export type StatusProps = 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';

export interface UserInfoItem {
  username: string;
  organisation: string;
  email: string;
  phoneNumber: string;
  date: string;
  status: StatusProps;
}

export const getUsersData = () => {
  const usersData: UserDataItem[] = [
    {
      icon: UsersOutline,
      color: '#df18ff',
      category: 'users',
      total: 2453
    },
    {
      icon: GroupUsersOutline,
      color: '#5718ff',
      category: 'active users',
      total: 2453
    },
    {
      icon: UsersLoan,
      color: '#f55f44',
      category: 'users with loans',
      total: 12453
    },
    {
      icon: UsersSavings,
      color: '#ff3366',
      category: 'users with savings',
      total: 102453
    },
  ];

  return usersData;
};

export const getUsersInfo = () => {
  const usersInfo: UserInfoItem[] = [
    {
      username: 'Adedeji',
      organisation: 'Lendsqr',
      email: 'adedeji@lendsqr.com',
      phoneNumber: '08078903721',
      date: '2020-05-15T10:00:00',
      status: 'Inactive',
    },
    {
      username: 'Debby Ogana',
      organisation: 'Irorun',
      email: 'debby2@irorun.com',
      phoneNumber: '08160780928',
      date: '2020-04-30T10:00:00',
      status: 'Pending',
    },
    {
      username: 'Grace Effiom',
      organisation: 'Lendsqr',
      email: 'grace@lendstar.com',
      phoneNumber: '07060780922',
      date: '2020-04-30T10:00:00',
      status: 'Blacklisted',
    },
    {
      username: 'Tosin Dokunmu',
      organisation: 'Lendsqr',
      email: 'tosin@lendsqr.com',
      phoneNumber: '07003309226',
      date: '2020-04-10T10:00:00',
      status: 'Pending',
    },
    {
      username: 'Grace Effiom',
      organisation: 'Lendsqr',
      email: 'grace@lendstar.com',
      phoneNumber: '07060780922',
      date: '2020-04-30T10:00:00',
      status: 'Active',
    },
    {
      username: 'Tosin Dokunmu',
      organisation: 'Lendsqr',
      email: 'tosin@lendsqr.com',
      phoneNumber: '08060780900',
      date: '2020-04-10T10:00:00',
      status: 'Active',
    },
    {
      username: 'Grace Effiom',
      organisation: 'Lendsqr',
      email: 'grace@lendstar.com',
      phoneNumber: '07060780922',
      date: '2020-04-30T10:00:00',
      status: 'Blacklisted',
    },
    {
      username: 'Tosin Dokunmu',
      organisation: 'Lendsqr',
      email: 'tosin@lendsqr.com',
      phoneNumber: '08060780900',
      date: '2020-04-10T10:00:00',
      status: 'Inactive',
    },
  ]

  return usersInfo;
}