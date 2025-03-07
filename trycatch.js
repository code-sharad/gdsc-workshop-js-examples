try {
  let result = 10 / 0; // No error, but not a valid operation

  const num = 23;
  num = 40;

} catch (error) {
  console.log("An error occurred:", error.message);
} finally {
  console.log("Execution completed.");
}
