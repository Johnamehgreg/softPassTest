import React from 'react'
import { NavLink } from 'react-router-dom'
import VerificationIcon from '../../svg-icons/VerificationIcon'


interface Props {
    dropdownContent: Object,
    item: any
}

const DropDownContent: React.FC<Props> = ({ item, dropdownContent }) => {


    //Variables


    //Function
    const Icons = (val: string) => {

        switch (val) {
            case 'eye':
                return <span><VerificationIcon width={'40'} /></span>
                break;

            default:
                break;
        }
    }

    return (
        <section className='nav-dropdown-menu bg-white md:py-10 -z-[1] shadow-xl '>
            <h3 className='dropdown-header hidden md:block font-bold text-[20px] text-softpasspurple-300'>{item.name}</h3>
            <article className='w-full article-content'>
                <div className='semi-container w-full'>
                    {
                        item?.subRoutes.map((item: any, index: number) => {
                            const { Image } = item
                            return (
                                <>
                                    {
                                        item.scrollCustomer ?

                                            <NavLink
                                                to={item.route}
                                                state={{ scroll: item.scrollCustomer }}
                                                key={item} className='sm:w-6/12 md:w-6/12 lg:w-4/12 flex w-full  py-4'>
                                                <div className='article-icon flex justify-center'>
                                                    <Image />
                                                </div>
                                                <div className='article-item-content'>
                                                    <b className='block'> {item.title}:</b>
                                                    <span className='block text-[13px] text-softpasspurple-500/40'>{item.content}</span>
                                                </div>
                                            </NavLink>

                                            :

                                            <NavLink
                                                to={item.route}
                                                key={item} className='sm:w-6/12 md:w-6/12 lg:w-4/12 flex w-full  py-4'>
                                                <div className='article-icon flex justify-center'>
                                                    <Image />
                                                </div>
                                                <div className='article-item-content'>
                                                    <b className='block'> {item.title}</b>
                                                    <span className='block text-[13px] text-softpasspurple-500/40'>{item.content}</span>
                                                </div>
                                            </NavLink>
                                    }

                                </>

                            )
                        })
                    }
                </div>
            </article>
        </section>
    )
}

export default DropDownContent