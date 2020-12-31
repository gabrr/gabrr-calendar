import React from 'react'

const PlusIcon: React.FC<any> = ({ fill, className }) => {
    return (
        <svg className={className} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="11.9854" y="0.5" width="2.78571" height="26" rx="1.39286" fill={fill} stroke={fill}/>
            <rect x="0.5" y="15.1769" width="2.78571" height="26" rx="1.39286" transform="rotate(-90 0.5 15.1769)" fill={fill} stroke={fill}/>
        </svg>
    )
}

export default PlusIcon