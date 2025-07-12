function allSettled() {
  const promises = [Promise.resolve(1), Promise.reject("error")];

  Promise.allSettled(promises)
    .then((results) => {
      console.log(results);
    });
}

allSettled();
