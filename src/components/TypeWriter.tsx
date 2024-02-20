import { TypeAnimation } from 'react-type-animation';


// type typeWriterProps = {
//   children: React.ReactNode
// }

const TypeWriter = () => {

  return (
    <div className='type-writer__container'>
       <TypeAnimation
        sequence={[
          'This is Sujai Beniks',
          2000,
          'A Frontend Web Developer',
          2000,
          // 'with 3 years experience working in frontend',
          // 2000,
          // 'and 2 years experience working in backend',
          // 2000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  )
}

export default TypeWriter