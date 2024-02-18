import RentlySVG from '../../assets/images/RentlySVG'
import Text from "../../components/Text.js"

const WorkExperience = () => {
  return (
    <div className="sb-layout">
      <Text variant="h1">
          WorkExperience
      </Text>
      <div className='sb-experience__content'>
        <div className="sb-experience__content__icon">
          <RentlySVG />
        </div>
        <div>
          <Text>Since 2020</Text>
          <Text>
            Working for about 4 years, currently playing the role of Senior Software Engineer, 
            Worked on multiple modules building the client requirements with high quality responsive website along with unit testing.
            One of my key contribution is integrating Single Sign On to the web application.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience