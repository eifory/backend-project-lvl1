import runEngine from '..';
import getRandomNumber from '../utils';

const gameInfo = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => runEngine(gameInfo, getGameData);
