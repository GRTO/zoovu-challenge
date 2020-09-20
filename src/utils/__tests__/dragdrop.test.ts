import { getComponentId, isMoveFromDroppable } from 'utils/dragdrop';

describe('Testing drag and drop utils file', () => {
  it('User move cards between slots', () => {
    const slot1 = 'droppable-1';
    const slot2 = 'droppable-2';
    expect(isMoveFromDroppable(slot1, slot2)).toBeTruthy();
  });

  it('User move cards from pick area to droppable area', () => {
    const slot2 = 'droppable-2';
    const pickup = 'pickup-1';
    expect(isMoveFromDroppable(pickup, slot2)).toBeFalsy();
  });

  it('Get id of the element', () => {
    const pattern = 'droppable-';
    const fullIdtext = 'droppable-1';
    const id = getComponentId(pattern, fullIdtext);
    expect(id).toEqual(1);
  });

  it('Get -1 if id element does not match with the pattern', () => {
    const pattern = 'pick-';
    const fullIdtext = 'droppable-1';
    const id = getComponentId(pattern, fullIdtext);
    expect(id).toEqual(-1);
  });
});
