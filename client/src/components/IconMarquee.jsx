import React from 'react'
import { SiMongodb, SiExpress, SiApache, SiPhp } from 'react-icons/si'
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'
import { RiTailwindCssFill } from 'react-icons/ri'
import Marquee from 'react-fast-marquee'


const icons = [
  {icon: <SiMongodb size={70} />, label: "Mongodb"},
  {icon: <SiExpress size={70}/>, label: "Express"},
  {icon: <FaReact size={70}/>, label: "React"},
  {icon: <FaNodeJs size={70}/>, label: "Nodejs"},
  {icon: <SiApache size={70}/>, label: "Apache"},
  {icon: <DiMysql size={70}/>, label: "MySQL"},
  {icon: <SiPhp size={70}/>, label: "PHP"},
  {icon: <RiTailwindCssFill size={70}/>, label: "TailwindCSS"},
  {icon: <FaFigma size={70}/>, label: "Figma"},
]
const IconMarquee = () => {
  return (
   <div className="mt-5 relative overflow-hidden">
  <div
    className="w-full"
    style={{
      WebkitMaskImage:
        'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      maskImage:
        'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
    }}
  >
    <Marquee speed={70} gradient={false} pauseOnHover={true}>
      {icons.map((item, idx) => (
        <div key={idx} className="mr-20" title={item.label}>
          {item.icon}
        </div>
      ))}
    </Marquee>
  </div>
</div>

  )
}

export default IconMarquee