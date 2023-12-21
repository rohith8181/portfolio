import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa6";
import './Intropage.css'
import { intro } from '../../Portfolio_details';

function Intropage() {
  return (
    <div id='about' className="timeline">
      <h1 className='Heading'>About Me</h1>
      <VerticalTimeline className='Timeline-text'>
        {
          intro.map(item => {
            return (
              <VerticalTimelineElement
                key={item.id}
                date={item.date}
                dateClassName='date-style'
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaGraduationCap />}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                <p id='description'>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </div>
  )
}

export default Intropage