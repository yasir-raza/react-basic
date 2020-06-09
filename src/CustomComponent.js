import React from 'react'

function CustomComponent({customName}){
return(
    <div>
        <p>This is from CustomComponent by {customName}</p>
        <h3>Fruits:</h3>
        <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>Mango</li>
            <li>Banana</li>
            <li>Strawberry</li>
        </ul>
        <h3>Vehicles:</h3>
        <ol>
            <li>Car</li>
            <li>Bus</li>
            <li>Bicycle</li>
            <li>Truck</li>
            <li>Rickshaw</li>
        </ol>
    </div>
)
}


export default CustomComponent;