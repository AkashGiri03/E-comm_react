import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi odio eaque voluptatum, suscipit, corrupti quo corporis modi veritatis reiciendis illo itaque. Vitae numquam a illum asperiores commodi blanditiis qui officiis.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, natus! Itaque eligendi molestiae repudiandae at quisquam laboriosam nemo, accusamus quod aspernatur laudantium suscipit? Provident consequatur totam quibusdam earum harum. Nisi illo
                     deleniti facilis fugiat a consectetur voluptatibus odit porro quod! Dolorum dolor doloribus qui adipisci! Aliquid quibusdam veritatis modi laboriosam.</p>
            </div>
        </div>
    )
}

export default DescriptionBox