import OverviewCard from '../Overview/OverviewCard'
import SocialCard from '../Social/SocialCard'

const Main = () => {
  return (
    <main className='mt-10 flex flex-col gap-8'>
      <section className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
        <SocialCard />
      </section>
      <div className='mt-4'>
        <OverviewCard/>
      </div>
    </main>
  )
}

export default Main