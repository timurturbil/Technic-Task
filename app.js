const countries = [
    ['JPN', 'PHL'],
    ['BRA', 'UAE'],
    ['USA', 'BRA'],
    ['UAE', 'JPN'],
  ];
  const firstElements = countries.map((i) => i[0]);
  const secondElements = countries.map((i) => i[1]);
  const startPoint = firstElements.filter((i) => !secondElements.includes(i))[0];
  const path = [startPoint]
  let now = startPoint;
  while(path.length < 5){
    countries.forEach((ctc) => {
      if(ctc[0] == now){
        now = ctc[1];
        path.push(now);
      }
    })
  }

  console.log(path)