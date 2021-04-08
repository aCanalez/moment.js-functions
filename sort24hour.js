const sortByHour = arr.sort(
    (a, b) =>
    moment(a, "HHmm").diff(
        moment(b, "HHmm")
    )
);
