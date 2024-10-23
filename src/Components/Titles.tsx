import React from 'react'

type TTitlePropType = {
    title?: string,
}

const Titles: React.FC<TTitlePropType> = (props) => {

    const { title } = props;

    return (
        <div className='w-full flex justify-center items-center mt-8 mb-2'>
            <div className='text-center font-bold p-2 border-t-2 border-b-2 px-6'>
                {title}
            </div>
        </div>
    )
}
export default Titles;