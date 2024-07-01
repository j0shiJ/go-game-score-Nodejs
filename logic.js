function calculateMaxDraws(p1, p2, p3) {
    // Confirming inputs are in non-decreasing order
    if (p1 > p2 || p2 > p3) {
      return -1;
    }
  
    // Total points should be divisible by 3
    const totalPoints = p1 + p2 + p3;
    if (totalPoints % 3 !== 0) {
      return -1;
    }
  
    // Check if the points are consistent with a valid set of games
    const totalGames = totalPoints / 3;
    if (p3 > 2 * totalGames) {
      return -1;
    }
  
    // Calculate the maximum number of draws
    const maxDraws = totalGames * 2 - p3;
    return maxDraws;
  }
  
  module.exports = calculateMaxDraws;
  