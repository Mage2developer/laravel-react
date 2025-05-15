import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links, className = '' }) {
    // If there's only 1 page, don't render pagination
    if (links.length <= 3) {
        return null;
    }

    return (
        <div className={`flex flex-wrap -mb-1 mt-5 justify-center ${className}`}>
            {links.map((link, key) => {
                // Skip the "Next" and "Prev" buttons if they're disabled
                if ((link.label === '&laquo; Previous' || link.label === 'Next &raquo;') && link.url === null) {
                    return null;
                }

                return (
                    <React.Fragment key={key}>
                        {link.url === null ? (
                            <div className="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded">
                                {link.label.replace('&laquo; ', '').replace(' &raquo;', '')}
                            </div>
                        ) : (
                            <Link
                                className={`mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-yellow-500 focus:outline-none focus:border-red-500 focus:ring ring-red-200 ${link.active ? 'bg-red-500 text-white hover:text-gray-700' : 'text-gray-700'}`}
                                href={link.url}
                            >
                                {link.label.replace('&laquo; ', '').replace(' &raquo;', '')}
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
