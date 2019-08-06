export const voteUp = (items, id) => {
  const indexOfItem = items.findIndex(item => item.id === id);
  const newIndex = indexOfItem - 1;
  if (newIndex < 0) {
    return items;
  }
  const itemToMove = items[indexOfItem];
  const filteredItems = items.filter(item => item.id !== id);
  const newItems = [
    ...filteredItems.slice(0, newIndex),
    itemToMove,
    ...filteredItems.slice(newIndex)
  ];
  return newItems;
};

export const voteDown = (items, id) => {
  const indexOfItem = items.findIndex(item => item.id === id);
  const newIndex = indexOfItem + 1;
  if (newIndex < 0) {
    return items;
  }
  const itemToMove = items[indexOfItem];
  const filteredItems = items.filter(item => item.id !== id);
  const newItems = [
    ...filteredItems.slice(0, newIndex),
    itemToMove,
    ...filteredItems.slice(newIndex)
  ];
  return newItems;
};

export default {
  voteUp,
  voteDown
};
