import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';

const Notes = () => {
    return (
        <div>
        <Note title="Note 1" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque nam labore sint ipsam ipsum dignissimos ea eius consectetur facere? "/>
        <Note title="Note 2" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque nam labore sint ipsam ipsum dignissimos ea eius consectetur facere? "/>
        <Note title="Note 3" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque nam labore sint ipsam ipsum dignissimos ea eius consectetur facere? "/>
        </div>
    );
};

export default Notes;