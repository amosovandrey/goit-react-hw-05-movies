export const formatDate = date => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString('en-GB', options);

  const [day, month, year] = formattedDate.split(' ');

  //   const capitalizedMonth = month.toUpperCase();

  return `${day} ${month} ${year}`;
};
