import React, { useState, useEffect } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Pagination from '@/Components/Pagination';

export default function Index({ users, filters }) {
    const [search, setSearch] = useState(filters.search || '');
    const [sort, setSort] = useState(filters.sort || 'id');
    const [direction, setDirection] = useState(filters.direction || 'asc');
    const [isSearching, setIsSearching] = useState(false);

    const updateSort = (column) => {
        const newDirection = sort === column && direction === 'asc' ? 'desc' : 'asc';
        setSort(column);
        setDirection(newDirection);
        router.get(route('users.index'), {
            search,
            sort: column,
            direction: newDirection
        }, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // Debounce search input to prevent too many requests
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (search !== filters.search) {
                setIsSearching(true);
                router.get(route('users.index'), {
                    search,
                    sort,
                    direction
                }, {
                    preserveState: true,
                    replace: true,
                    onFinish: () => setIsSearching(false),
                });
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [search]);

    const sortIcon = (column) => {
        if (sort !== column) return null;

        return direction === 'asc'
            ? <span className="ml-1">↑</span>
            : <span className="ml-1">↓</span>;
    };

    console.log(users)

    return (
        <AuthenticatedLayout>
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-2xl font-semibold">Users</h1>

                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                        placeholder="Search users..."
                                        value={search}
                                        onChange={handleSearch}
                                    />
                                    {isSearching && (
                                        <svg className="animate-spin ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full whitespace-nowrap">
                                    <thead>
                                    <tr className="text-left font-bold">
                                        <th className="pb-4 pt-6 px-6 cursor-pointer" onClick={() => updateSort('id')}>
                                            ID {sortIcon('id')}
                                        </th>
                                        <th className="pb-4 pt-6 px-6 cursor-pointer" onClick={() => updateSort('name')}>
                                            Name {sortIcon('name')}
                                        </th>
                                        <th className="pb-4 pt-6 px-6 cursor-pointer" onClick={() => updateSort('email')}>
                                            Email {sortIcon('email')}
                                        </th>
                                        <th className="pb-4 pt-6 px-6 cursor-pointer" onClick={() => updateSort('created_at')}>
                                            Created {sortIcon('created_at')}
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.data.length > 0 ? (
                                        users.data.map(user => (
                                            <tr key={user.id} className="hover:bg-gray-50">
                                                <td className="border-t px-6 py-4">{user.id}</td>
                                                <td className="border-t px-6 py-4">{user.name}</td>
                                                <td className="border-t px-6 py-4">{user.email}</td>
                                                <td className="border-t px-6 py-4">
                                                    {new Date(user.created_at).toLocaleDateString()}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="border-t px-6 py-4 text-center text-gray-500">
                                                No users found.
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>

                            <Pagination class="mt-6" links={users.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
