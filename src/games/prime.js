import runEngine from '..';
import getRandomNumber from '../utils';

const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const randomNumber = getRandomNumber(2, 100);
  const question = String(randomNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => runEngine(gameInfo, getGameData);
