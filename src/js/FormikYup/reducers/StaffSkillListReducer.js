import { createAction, handleActions } from 'redux-actions';
import Immutable from 'immutable';

const staffSkillListInitialState = Immutable.fromJS({
  staffSkillList: [],
});

const ADD_TO_STAFF_SKILL_LIST = 'ADD_TO_STAFF_SKILL_LIST';
const EDIT_STAFF_SKILL = 'EDIT_STAFF_SKILL';

export const addToStaffSkillList = createAction(ADD_TO_STAFF_SKILL_LIST);
export const editStaffSkill = createAction(EDIT_STAFF_SKILL, (index, item = undefined) => ({ index, item }));

const StaffSkillListReducer = handleActions(
  {
    [ADD_TO_STAFF_SKILL_LIST]: (state, { payload }) => {
      const lastStaffSkillList = state.get('staffSkillList');
      const staffSkillListToSet = lastStaffSkillList.push(...payload);
      return state.set('staffSkillList', staffSkillListToSet);
    },
    [EDIT_STAFF_SKILL]: (state, { payload: { index, item } }) => {
      const lastStaffSkillList = state.get('staffSkillList');
      const staffSkillListToSet = lastStaffSkillList.splice(index, 1, item);
      return state.set('staffSkillList', staffSkillListToSet);
    },
  },
  staffSkillListInitialState,
);

export default StaffSkillListReducer;
