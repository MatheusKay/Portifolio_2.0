import { SkillsList } from '../../bancoProjetos'
import CardSkill from '../subComponents/CardSkill'
import Section from '../subComponents/SectionsLayout'

import { SkillsContain } from './style'

const SectionSkills = () => {
  return (
    <Section
      title="Skills"
      element={
        <SkillsContain>
          {SkillsList.map((skill) => (
            <CardSkill
              key={skill.title}
              title={skill.title}
              icons={
                <>
                  {skill.icons.map((icon) => (
                    <i key={icon} className={icon}></i>
                  ))}
                </>
              }
            />
          ))}
        </SkillsContain>
      }
    />
  )
}

export default SectionSkills
