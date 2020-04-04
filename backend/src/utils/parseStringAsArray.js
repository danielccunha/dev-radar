module.exports = (arrayAsString, separator = ",") => {
  return arrayAsString.split(separator).map((x) => x.trim());
};
