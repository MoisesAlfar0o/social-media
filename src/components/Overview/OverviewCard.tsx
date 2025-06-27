import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import youtube from '../../assets/images/icon-youtube.svg'
import up from '../../assets/images/icon-up.svg'
import down from '../../assets/images/icon-down.svg'

const OverviewCard = () => {
  return (
    <>
      <h2 className='text-2xl text-light-grayish-blue dark:text-white font-semibold mb-4'>Overview- Today</h2>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
        {/* Facebook */}
        <div className='overview-card'
        >
          <div className='flex justify-between items-center'>
            <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs sm:text-sm font-semibold'>Page Views</span>
            <img src={facebook} className='size-4'/>
          </div>
          <div className='flex justify-between'>
            <h3 className='text-2xl text-light-dark-blue dark:text-white font-bold'>87</h3>

            <div className='flex flex-col justify-end items-end'>
              <div className='flex justify-end items-center gap-1 mb-1'>
                <img src={up} className='w-2' />
                <span className='text-xs text-lime-green font-bold'>3%</span>
              </div>
            </div>
          </div>
        </div>
        <div className='overview-card'
        >
          <div className='flex justify-between items-center'>
            <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs sm:text-smfont-semibold'>Likes</span>
            <img src={facebook} className='size-4'/>
          </div>
          <div className='flex justify-between'>
            <h3 className='text-2xl text-light-dark-blue dark:text-white font-bold'>52</h3>

            <div className='flex flex-col justify-end items-end'>
              <div className='flex justify-end items-center gap-1 mb-1'>
                <img src={down} className='w-2' />
                <span className='text-xs text-bright-red font-bold'>2%</span>
              </div>
            </div>
          </div>
        </div>
        {/* Instragram */}
        <div className='overview-card'
        >
          <div className='flex justify-between items-center'>
            <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs sm:text-sm font-semibold'>Likes</span>
            <img src={instagram} className='size-4'/>
          </div>
          <div className='flex justify-between'>
            <h3 className='text-2xl text-light-dark-blue dark:text-white font-bold'>5462</h3>

            <div className='flex flex-col justify-end items-end'>
              <div className='flex justify-end items-center gap-1 mb-1'>
                <img src={up} className='w-2' />
                <span className='text-xs text-lime-green font-bold'>2257%</span>
              </div>
            </div>
          </div>
        </div>
        <div className='overview-card'
        >
          <div className='flex justify-between items-center'>
            <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs sm:text-sm font-semibold'>Profile Views</span>
            <img src={instagram} className='size-4'/>
          </div>
          <div className='flex justify-between'>
            <h3 className='text-2xl text-light-dark-blue dark:text-white font-bold'>52k</h3>

            <div className='flex flex-col justify-end items-end'>
              <div className='flex justify-end items-center gap-1 mb-1'>
                <img src={up} className='w-2' />
                <span className='text-xs text-lime-green font-bold'>1375%</span>
              </div>
            </div>
          </div>
        </div>
        {/* Twitter */}
        <div className='overview-card'
        >
          <div className='flex justify-between items-center'>
            <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs sm:text-sm font-semibold'>Retweets</span>
            <img src={twitter} className='w-4 h-3.5'/>
          </div>
          <div className='flex justify-between'>
            <h3 className='text-2xl text-light-dark-blue dark:text-white font-bold'>117</h3>

            <div className='flex flex-col justify-end items-end'>
              <div className='flex justify-end items-center gap-1 mb-1'>
                <img src={up} className='w-2' />
                <span className='text-xs text-lime-green font-bold'>303%</span>
              </div>
            </div>
          </div>
        </div>
        <div className='overview-card'
        >
          <div className='flex justify-between items-center'>
            <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs sm:text-sm font-semibold'>Likes</span>
              <img src={twitter} className='w-4 h-3.5'/>
          </div>
          <div className='flex justify-between'>
            <h3 className='text-2xl text-light-dark-blue dark:text-white font-bold'>507</h3>

            <div className='flex flex-col justify-end items-end'>
              <div className='flex justify-end items-center gap-1 mb-1'>
                <img src={up} className='w-2' />
                <span className='text-xs text-lime-green font-bold'>553%</span>
              </div>
            </div>
          </div>
        </div>
        {/* Youtube */}
        <div className='overview-card'
        >
          <div className='flex justify-between items-center'>
            <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs sm:text-sm font-semibold'>Likes</span>
            <img src={youtube} className='size-5'/>
          </div>
          <div className='flex justify-between'>
            <h3 className='text-2xl text-light-dark-blue dark:text-white font-bold'>107</h3>

            <div className='flex flex-col justify-end items-end'>
              <div className='flex justify-end items-center gap-1 mb-1'>
                <img src={down} className='w-2' />
                <span className='text-xs text-bright-red font-bold'>19%</span>
              </div>
            </div>
          </div>
        </div>
        <div className='overview-card'
        >
          <div className='flex justify-between items-center'>
            <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs sm:text-sm font-semibold'>Total Views</span>
            <img src={youtube} className='size-5'/>
          </div>
          <div className='flex justify-between'>
            <h3 className='text-2xl text-light-dark-blue dark:text-white font-bold'>1407</h3>

            <div className='flex flex-col justify-end items-end'>
              <div className='flex justify-end items-center gap-1 mb-1'>
                <img src={down} className='w-2' />
                <span className='text-xs text-bright-red font-bold'>12%</span>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default OverviewCard