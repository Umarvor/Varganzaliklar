import Top from '../Navbar/Top';
import Slayder from '../Slayder/Slayder'
import Malumot from '../Malumot/Malumot';
import Slayder2 from '../Slayder2/Slayder2';
import Malumot2 from '../Malumot2/Malumot2';
import Rasm1 from '../Rasm1/Rasm1';
function Slider() {
  return (
    <div className='container'>

      <Top />
      <Rasm1 />
      <Slayder />
      <Malumot />
      <Slayder2 />
      <Malumot2 />

    </div>
  )
}

export default Slider