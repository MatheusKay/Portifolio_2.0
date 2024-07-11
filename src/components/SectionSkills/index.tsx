import { SkillsList } from '../../bancoProjetos'

import CardSkill from '../subComponents/CardSkill'
import Section from '../subComponents/SectionsLayout'

import { SkillsContain } from './style'

const SectionSkills = () => {
  return (
    <Section
      idSection="skill"
      title="Skills"
      element={
        <SkillsContain>
          {SkillsList.map((skill, indexId) => (
            <CardSkill
              key={skill.title}
              title={skill.title}
              cardId={indexId}
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
