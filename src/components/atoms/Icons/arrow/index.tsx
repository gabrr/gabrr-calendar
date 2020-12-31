import React from 'react'

const Arrow: React.FC<any> = ({ fill, className }) => {
    return (
        <svg className={className} width="12" height="32" viewBox="0 0 12 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1L2.25098 15.5294C2.09412 15.8235 2.09412 16.1765 2.25098 16.4706L10 31" stroke={fill} stroke-width="1.2"/>
        </svg>
    )
}

export default Arrow