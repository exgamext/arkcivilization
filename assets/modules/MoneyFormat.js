function MoneyFormat(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "m" },
    { value: 1e9, symbol: "b" },
    { value: 1e12, symbol: "t" },
    { value: 1e15, symbol: "aa" },
    { value: 1e18, symbol: "ab" },
    { value: 1e21, symbol: "ac" },
    { value: 1e24, symbol: "ad" },
    { value: 1e27, symbol: "ae" },
    { value: 1e30, symbol: "af" },
    { value: 1e33, symbol: "ag" },
    { value: 1e36, symbol: "ah" },
    { value: 1e39, symbol: "ai" },
    { value: 1e42, symbol: "aj" },
    { value: 1e45, symbol: "ak" },
    { value: 1e48, symbol: "al" },
    { value: 1e51, symbol: "am" },
    { value: 1e54, symbol: "an" },
    { value: 1e57, symbol: "ao" },
    { value: 1e60, symbol: "ap" },
    { value: 1e63, symbol: "aq" },
    { value: 1e66, symbol: "ar" },
    { value: 1e69, symbol: "as" },
    { value: 1e72, symbol: "at" },
    { value: 1e75, symbol: "au" },
    { value: 1e78, symbol: "av" },
    { value: 1e81, symbol: "aw" },
    { value: 1e84, symbol: "ax" },
    { value: 1e87, symbol: "ay" },
    { value: 1e90, symbol: "az" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}