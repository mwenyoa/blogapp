import moment from 'moment';

export const timeAgo = (date) => {
    const timeAg = moment(date).fromNow();
    return timeAg;
    }

    