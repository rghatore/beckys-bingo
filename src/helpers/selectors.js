export function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
};

// clear all selected cells
export function clearSelected() {
  const allTags = document.querySelectorAll('td');
  allTags && allTags.forEach(item => {
    item.classList.remove('selected')
    if(item.innerHTML === 'FREE') {
      item.classList.add('selected');
    }
  });
};

const findMax = (search, max) => {
  // initialize
  let count = 0;
  // get bingo line
  const bingoLine = document.querySelectorAll(`.${search}`);
  // loop through one bingo line
  // add each selected one to count
  bingoLine.forEach(item => {
    if ([...item.classList].includes('selected')) {
      count++;
    }
  });
  // replace max if count > max
  if (count > max) {
    max = count;
  };
  // output
  return max
}

export function maxNumber() {
  let max = 0;
  // first, second, ..., twelfth
  max = findMax('first', max);
  max = findMax('second', max);
  max = findMax('third', max);
  max = findMax('fourth', max);
  max = findMax('fifth', max);
  max = findMax('sixth', max);
  max = findMax('seventh', max);
  max = findMax('eighth', max);
  max = findMax('ninth', max);
  max = findMax('tenth', max);
  max = findMax('eleventh', max);
  max = findMax('twelfth', max);

  return max;
}