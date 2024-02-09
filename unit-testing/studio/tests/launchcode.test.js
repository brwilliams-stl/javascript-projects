// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("organization should be nonprofit", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("executiveDirector should be Jeff", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("percentageCoolEmployees should be 100", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("programsOffered should be ", () => {
    expect(launchcode.programsOffered).toBe["Web Development", "Data Analysis", "Liftoff"];
  });

  test("should return 'Launch!' for a number ONLY divisible by 2", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
  test("should return 'Code!' for a number ONLY divisible by 3", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });
  test("should return 'Rocks!' for a number ONLY divisible by 5", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });
  test("should return 'LaunchCode!' for a number divisible by 2 AND 3", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  test("should return 'LaunchCode!' for a number divisible by 3 AND 5", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });
  test("should return 'LaunchCode!' for a number divisible by 2 AND 5", () => {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });
  test("should return 'Rutabagas! That doesn't work.' for a number NOT divisible by 2, 3, or 5", () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});