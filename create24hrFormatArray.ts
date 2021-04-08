import moment, { Moment } from "moment";
let times: Array<Moment> = [];

let i: number = 0;
for (i; i <= 24; i++) {
  times.push(moment(i <= 9 ? `0${i}:00` : `${i}:00`, "HHmm"));
}

export { times };
