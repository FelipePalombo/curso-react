import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member';

ReactDOM.render(
<div> 
    <Family lastName="Palombo">
        <Member name="Felipe"></Member>
        <Member name="Joao"></Member>
    </Family>
</div>, 
document.getElementById('app'))