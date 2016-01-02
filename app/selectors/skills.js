import { createSelector } from 'reselect';

/**
 * Gets the skills having at least one of their tags selected in the list of tags.
 * @param skills
 * @param tags
 * @returns {*}
 */
function selectSkills(skills, tags) {
    // Gets the tags title currently selected
    const selectedTags = tags.filter(tag => tag.selected).map(tag => tag.title);
    // Gets the skills associated with those tags
    return skills.filter(skill => {
        for (let tag of skill.tags) {
            if (selectedTags.indexOf(tag) !== -1) return true;
        }
        return false;
    });
}

const tagsSelector = state => state.tags;
const skillsSelector = state => state.skills;

export const visibleSkillsSelector = createSelector(
    [tagsSelector, skillsSelector],
    (tags, skills) => {
        return {
            skills: {
                ...skills,
                values: selectSkills(skills.values, tags.values)
            },
            tags
        }
    }
);