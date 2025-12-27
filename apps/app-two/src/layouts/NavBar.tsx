
import { useEffect, useState } from 'react'

const NavBar = (props) => {
  const { data } = props;

  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <ul className='overflow-hidden fixed left-1/2 -translate-x-1/2 top-10 rounded-full flex border border-gray-300 shadow-lg bg-white'>
      {data.map((item, index) => (
        <li className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${active === item.id ? 'bg-gray-200' : ''}`} key={index} onClick={() => {item.ref.current.scrollIntoView({ behavior: 'smooth' })}}>{item.title}</li>
      ))}
    </ul>
  )
}

export default NavBar
