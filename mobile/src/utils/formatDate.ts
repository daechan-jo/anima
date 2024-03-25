const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const parts = formattedDate.split(' ');
  const dayWithOrdinal = parseInt(parts[2], 10);
  return `${parts[0]} ${parts[1]} ${dayWithOrdinal}`;
};

export default formatDate;
