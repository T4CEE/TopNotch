import BorderlessPayment from './BorderlessPayment'
import FlexOne from './FlexOne'
import FlexTwo from './FlexTwo'

const HomePage = () => {
  return (
    <div>
<BorderlessPayment />
<div className='flex flex-col md:flex-row'>
      <FlexOne />
      <FlexTwo />
</div>
    </div>
  )
}

export default HomePage