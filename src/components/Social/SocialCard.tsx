import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import youtube from '../../assets/images/icon-youtube.svg'
import up from '../../assets/images/icon-up.svg'
import down from '../../assets/images/icon-down.svg'

const SocialCard = () => {
  return (
    <>
      <div className='social-card border-t-4 border-facebook  rounded'>
        {/* Facebook */}
        <div className='flex items-center gap-2 mt-4'>
          <img src={facebook} className='size-4'/>
          <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs font-bold'>@nathaf</span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className='font-bold text-5xl text-dark-blue dark:text-white'>1987</h3>
          <span className='text-xs sm:text-sm text-light-grayish-blue dark:text-dark-desaturated-blue'>F O L L O W E R S</span>
        </div>
        <div className='flex items-center gap-1'>
          <img src={up} alt="" />
          <span className='text-xs text-lime-green font-bold'>12 Today</span>
        </div>
      </div>
      {/* Twitter */}
      <div className='social-card border-t-4 border-twitter rounded'>
        <div className='flex items-center gap-2 mt-3'>
          <img src={twitter} className='size-4'/>
          <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs font-bold'>@nathaf</span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className='font-bold text-5xl text-dark-blue dark:text-white'>1044</h3>
          <span className='text-sm sm:text-sm text-light-grayish-blue dark:text-dark-desaturated-blue'>F O L L O W E R S</span>
        </div>
        <div className='flex items-center gap-1'>
          <img src={up} alt="" />
          <span className='text-xs text-lime-green font-bold'>99 Today</span>
        </div>
      </div>
      {/* Instagram */}
      <div className='social-card relative'>
        <div className='absolute top-0 w-full p-[2px] rounded-t bg-gradient-to-r from-instagram-start to-instagram-end'></div>
        <div className='flex items-center gap-2 mt-3'>
          <img src={instagram} className='size-4'/>
          <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs font-bold'>@nathaf</span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className='font-bold text-5xl text-dark-blue dark:text-white'>11k</h3>
          <span className='text-sm sm:text-sm text-light-grayish-blue dark:text-dark-desaturated-blue'>F O L L O W E R S</span>
        </div>
        <div className='flex items-center gap-1'>
          <img src={up} alt="" />
          <span className='text-xs text-lime-green font-bold'>1099 Today</span>
        </div>
      </div>
      {/* Youtube */}
      <div className='social-card border-t-4 border-youtube rounded'>
        <div className='flex items-center gap-2 mt-3'>
          <img src={youtube} className='size-4'/>
          <span className='text-light-grayish-blue dark:text-dark-desaturated-blue text-xs font-bold'>@nathaf</span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className='font-bold text-5xl text-dark-blue dark:text-white'>8239</h3>
          <span className='text-sm sm:text-sm text-light-grayish-blue dark:text-dark-desaturated-blue'>F O L L O W E R S</span>
        </div>
        <div className='flex items-center gap-1'>
          <img src={down} alt="" />
          <span className='text-xs text-bright-red font-bold'>144 Today</span>
        </div>
      </div>
    </>
  )
}

export default SocialCard