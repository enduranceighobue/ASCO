import React from 'react'
import FascoHero from './FascoHero.jsx'

const Fasco = () => {

    return (
        <>
            <FascoHero />
            <div className='w-11/12 lg:w-9/12 mx-auto flex flex-col justify-center items-center gap-12 '>
                <div className="space-y-12">
                    <h1 className='text-center md:text-5xl text-[#1d2140] text-3xl font-bold py-10'>FSS & ASCO Alliance</h1>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 text-[#1D2140] md:text-xl">
                        <div className='w-full lg:w-1/2 text-justify'>
                            <p><strong className='text-[#1d2140]'>FASCO</strong>  Nigeria is a formal strategic alliance between Field Security Services Group <strong className='text-[#0080bb]'>(fieldsecurityservices.com)</strong> and Ashaka Security Company Ltd. <strong className='text-[#0080bb]'>(Field Ashaka Security Company Nigeria)</strong> forged over 5 years of combined operations throughout Nigeria brings the strengths of both companys together for the benefit of our international Client base .</p> <br />
                            <h3 className='mb-3'>
                                <strong className='text-[#1d2140]'>FSS & ASCO Alliance</strong>
                            </h3>

                            <p>
                                FASCO Nigeria’s strength lies in the combination of FSS Groups’ world-class and industry leading delivery of the highest calibre individuals.
                            </p>
                        </div>

                        <div className='w-full lg:w-1/2 text-justify'>
                            <p>
                               <strong className='text-[#1d2140]'> FASCO </strong>provide specialist and niche risk management services in challenging regions through the application of the management’s 150 years’ combined knowledge and experience gained within UK special operations and tier one corporate security organisations coupled with <strong className='text-[#1d2140]'> ASCOs’</strong> team of highly professional, experienced, motivated and dedicated personnel, numbering over 10,000 spread across the entire Nigerian geography and providing security deliverables for over 48 years.</p>
                            <h3 className='mb-4'>
                                FASCO Nigeria firmly stands behind its motto of:
                            </h3>
                            <p className='mb-10'>
                                <strong className='italic text-[#0080bb]'>“Supporting Client’s needs in frontier markets through the unrelenting pursuit of excellence.”</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fasco