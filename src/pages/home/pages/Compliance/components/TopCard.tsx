
const TopCard = () => {
    return (
        <div className="bg-white py-8 rounded-md px-8 items-center md:flex w-full min-h-[10px]">
            <p style={{ color: '#2B3F57' }} className='md:mr-8 mb-[10px] md:mb-[0px] text-[16px]'>Updates</p>
            <div className=" mb-[10px] md:mb-[0px] w-1/1  md:w-4/12">
                <div className="flex mb-[5px]  items-center justify-between">
                    <p style={{ color: '#2B3F57' }} className='text-[12px]'>Customer credentials</p>
                    <p className='text-[14px]' style={{ color: '#9AA9BB' }}>60%</p>
                </div>

                <div className="w-full h-[5px] bg-gray-200  rounded-lg">
                    <div className="h-full w-[50%] bg-softpasspurple-300 rounded-lg ">

                    </div>
                </div>

            </div>
            <div className=" mb-[10px] md:mb-[0px] w-1/1 md:ml-[30px] md:w-4/12">
                <div className="flex mb-[5px]  items-center justify-between">
                    <p style={{ color: '#2B3F57' }} className='text-[12px]'>Director Information</p>
                    <p className='text-[14px]' style={{ color: '#9AA9BB' }}>30%</p>
                </div>


                <div className="w-full h-[5px] bg-gray-200  rounded-lg">
                    <div className="h-full w-[30%] bg-softpasspurple-300 rounded-lg ">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCard