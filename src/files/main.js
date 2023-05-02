window.addEventListener('DOMContentLoaded', function () {

  function getVariables() {
    const result = Object.create(null);

    const params = new URLSearchParams(window.location.search);

    params.forEach((value, name) => result[name] = value);

    return result;
  }

  const ObjectUrl = getVariables();
  console.log(ObjectUrl);
});