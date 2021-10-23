export const getLayout = (
  noOfOptions: number,
  index: number,
  showChips: boolean,
  isModal: boolean,
  allowMultiSelect: boolean,
): boolean => {
  const OPTIONS_ARRAY = [1, 3];
  if (isModal && showChips) OPTIONS_ARRAY.push(2);
  if (
    (noOfOptions > 4 && index === 0 && allowMultiSelect) ||
    OPTIONS_ARRAY.includes(noOfOptions)
  )
    return true;

  return false;
};
