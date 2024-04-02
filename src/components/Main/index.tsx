import Video from '@/components/Common/Video'
import './style.css'

const MainVideo = () => {
  return (
    <section
      id='home'
      className='flex flex-col items-center justify-center w-full px-16 gap-6'
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      <div className='flow'>
        <div className='flex items-center gap-6'>
          <img src='/svg/sewol-ribbon.svg' />
          <p className='text-[#F2CD3A] text-2xl font-semibold'>
            세월호 10주기입니다, 그날의 아픔과 상처를 잊지않고 기억하겠습니다.
          </p>
          <img src='/svg/sewol-ribbon.svg' />
        </div>
      </div>
      <div className='w-full max-w-60xl aspect-video'>
        <Video id='j5sxdl5_hPc' />
      </div>
    </section>
  )
}

export default MainVideo
