import { SkillCategory } from "./SkillCategory";
import { SkillType } from "./SkillType";


export interface PlayerSkill {
  skill: string;
  skillType: SkillType;
  metadata: string;
  cooldown: number;
  skillCategory: SkillCategory;
}
