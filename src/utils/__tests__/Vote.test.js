import Vote from '../Vote';

describe('Array helper functions', () => {
  it('vote item up', () => {
    const initialItems = [
      { id: 1, name: 'Waffle House' },
      { id: 2, name: 'On Tap' },
      { id: 3, name: 'Leftovers' }
    ];

    const resultingItems = [
      { id: 2, name: 'On Tap' },
      { id: 1, name: 'Waffle House' },
      { id: 3, name: 'Leftovers' }
    ];

    expect(Vote.voteUp(initialItems, 2)).toEqual(resultingItems);
  });

  it('Do nothing if voting top item up', () => {
    const initialItems = [
      { id: 1, name: 'Waffle House' },
      { id: 2, name: 'On Tap' },
      { id: 3, name: 'Leftovers' }
    ];
    expect(Vote.voteUp(initialItems, 1)).toEqual(initialItems);
  });

  it('vote item down', () => {
    const initialItems = [
      { id: 1, name: 'Waffle House' },
      { id: 2, name: 'On Tap' },
      { id: 3, name: 'Leftovers' }
    ];

    const resultingItems = [
      { id: 1, name: 'Waffle House' },
      { id: 3, name: 'Leftovers' },
      { id: 2, name: 'On Tap' }
    ];

    expect(Vote.voteDown(initialItems, 2)).toEqual(resultingItems);
  });

  it('Do nothing if voting bottom item down', () => {
    const initialItems = [
      { id: 1, name: 'Waffle House' },
      { id: 2, name: 'On Tap' },
      { id: 3, name: 'Leftovers' }
    ];
    expect(Vote.voteDown(initialItems, 3)).toEqual(initialItems);
  });
});
