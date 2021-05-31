import moment from "moment";

let times: Array<string> = [];

let i: number = 0;
for (i; i <= 23; i++) {
  times.push(
    moment(i <= 9 ? `0${i}:00` : `${i}:00`, "hh:mm").format("hh:mm a")
  );

  for (let x = 1; x <= 3; x++) {
    times.push(
      moment(i <= 9 ? `0${i}:00` : `${i}:00`, "hh:mm")
        .add(15 * x, "minutes")
        .format("hh:mm a")
    );
  }
}

console.log(times);
