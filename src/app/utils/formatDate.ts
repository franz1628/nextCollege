import { format } from 'date-fns';

const formatDate = (date: Date | string): string => {
    if(!date) return "-"
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  return format(parsedDate, 'yyyy-MM-dd');
};

export default formatDate;

