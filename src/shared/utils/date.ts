import moment from 'moment';
import { DD_MM_YYYY } from 'shared/config/constants';

export const formatDate = (d: Date | string, format?: string) =>
  moment(d).format(format ?? DD_MM_YYYY);
