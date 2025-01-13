import BorderlessPayment from './BorderlessPayment'
import FlexOne from './FlexOne'
import FlexTwo from './FlexTwo'

const HomePage = () => {
  return (
    <div>
<BorderlessPayment />
<div className='flex flex-col md:flex-row gap-x-9 md:mt-6 md:mb-2 md:mx-[200px]'>
      <FlexOne />
      <FlexTwo />
</div>
    </div>
  )
}

export default HomePage