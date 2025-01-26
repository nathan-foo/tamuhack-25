import React from 'react'

const DashboardCard = ({ title, code }) => {
  return (
    <div className='w-[300px] h-[300px] bg-slate-800 rounded-md'>
        <div className='flex flex-col items-center justify-center size-full'>
            <div className='font-bold'>
                {title}
            </div>
            <div>
                {code}
            </div>
            <div>please fix this cursed card</div>
        </div>
    </div>
  )
}

export default DashboardCard