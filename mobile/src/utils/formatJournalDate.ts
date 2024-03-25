const formatJournalDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };

  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString('ko-KR', options);
  } else {
    return (
      `${date.getFullYear()}년 ` + date.toLocaleDateString('ko-KR', options)
    );
  }
};

export default formatJournalDate;
