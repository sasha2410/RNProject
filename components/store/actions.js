export const CHANGE_STEP = 'CHANGE_STEP';

export const changeStep = (newStep) => {
  return { type: CHANGE_STEP, step: newStep };
};