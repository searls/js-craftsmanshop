describe("#primeFactors", function() {
  it("finds no factors for 1", function() {
    expect(primeFactors(1)).toEqual([]);
  });
  it("finds 2 as a prime factor of 2", function() {
    expect(primeFactors(2)).toEqual([2]);
  });
});