import * as moment from 'moment';

export const convertDate = str => {
  return moment(str).format('MMMM D, YYYY')
}