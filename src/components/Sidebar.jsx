import React from 'react';
import { Stack } from '@mui/system';

import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    // for mobile or ipad, it changes from sidebar to top scroll row
    <Stack
        direction="row"
        sx={{ overflowY: "auto", height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}
    >
        {/* map over all categories for sidebar */}
        {categories.map((category, index) => (
            <button
                key={index}
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                    color: '#fff'
                }}
            >
                <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>
                    {category.icon}
                </span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}

    </Stack>
)

export default Sidebar