import React from 'react';
import { mount } from 'marketing/MarketingApp'; // Adjust the path as necessary
import { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, [])

    return <div ref={ref} />
}