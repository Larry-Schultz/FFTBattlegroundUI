import { PlayerSkill } from "src/app/model/PlayerRecord/PlayerSkill";
import { SkillCategory } from "src/app/model/PlayerRecord/SkillCategory";

export function getColorForSkill(playerSkill: PlayerSkill): string {
    if (playerSkill.skillCategory === SkillCategory.ELITE_MONSTER) {
        return 'darkblue';
    } else if (playerSkill.skillCategory === SkillCategory.STRONG_MONSTER) {
        return 'blue';
    } else if (playerSkill.skillCategory === SkillCategory.MONSTER) {
        return 'green';
    } else if (playerSkill.skillCategory === SkillCategory.LEGENDARY) {
        return 'darkgoldenrod';
    } else if (playerSkill.skillCategory === SkillCategory.EQUIPMENT) {
        return 'brown';
    } else if (playerSkill.skillCategory === SkillCategory.ENTRY) {
        return 'black';
    } else if (playerSkill.skillCategory === SkillCategory.JOB) {
        return 'purple';
    } else if (playerSkill.skillCategory === SkillCategory.SUPPORT) {
        return 'grey';
    } else if (playerSkill.skillCategory === SkillCategory.REACTION) {
        return 'rgb(204,204,0)';
    } else if (playerSkill.skillCategory === SkillCategory.MOVEMENT) {
        return 'red';
    }

    return null;
}

export function getColorForSkillByName(playerSkills: PlayerSkill[], skillName: string): string {
    const matchingSkill = getPlayerSkillBySkillName(playerSkills, skillName);

    let result = null;
    if (matchingSkill) {
      result = this.getColorForSkill(matchingSkill);
    }

    return result;
}

export function getSkillBonusDescriptionFromExistingSkills(playerSkills: PlayerSkill[], skillBonus: string): string {
    const matchingSkill: PlayerSkill = getPlayerSkillBySkillName(playerSkills, skillBonus);

    let description = null
    if (matchingSkill) {
      description = matchingSkill.metadata;
    }

    return description;
}

export function getPlayerSkillBySkillName(playerSkills: PlayerSkill[], skillName: string): PlayerSkill {
    const matchingSkills: PlayerSkill[] = playerSkills.filter((playerSkill: PlayerSkill): boolean => {
      return playerSkill.skill === skillName;
    });

    let result: PlayerSkill;
    if (matchingSkills && matchingSkills.length > 0) {
      result = matchingSkills[0];
    } else {
      result = null;
    }

    return result;
}

export function sortSkillsByName(playerSkill1: PlayerSkill, playerSkill2: PlayerSkill): number {
    let sortResult = 0;
    if (playerSkill1.skill < playerSkill2.skill) {
      sortResult = -1;
    } else if (playerSkill1.skill > playerSkill2.skill) {
      sortResult = 1;
    }
    return sortResult;
}
