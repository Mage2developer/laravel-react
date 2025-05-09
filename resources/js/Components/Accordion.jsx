import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
    const [openItemId, setOpenItemId] = useState(null);

    const handleClick = (id) => {
        setOpenItemId(prev => (prev === id ? null : id));
    };

    return (
        <div className="accordion">
            {items.map(item => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={item.id === openItemId}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
};

export default Accordion;
