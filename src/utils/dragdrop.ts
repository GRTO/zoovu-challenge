export const getComponentId = (term: string, text: string) => {
  const pattern = new RegExp(term, 'g');
  const [, itemId] = text.split(pattern);
  return itemId ? +itemId : -1;
};

export const isMoveFromDroppable = (source: string, destination: string) =>
  source.includes('droppable') && destination.includes('droppable');
