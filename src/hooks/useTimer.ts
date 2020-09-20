import { useState, useEffect } from 'react';

type TimerStatus = 'NOT_STARTED' | 'START_RUNNING' | 'RUNNING' | 'STOPPED' | 'PAUSE';
interface ITimer {
  seconds: number;
  status: TimerStatus;
}
const useTimer = () => {
  const [secondsTimer, setSecondsTimer] = useState<ITimer>({ seconds: 0, status: 'NOT_STARTED' });
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const { seconds } = secondsTimer;

  useEffect(() => {
    if (secondsTimer.status === 'START_RUNNING' || secondsTimer.status === 'PAUSE') {
      initializeTimer();
    }
  }, [secondsTimer]);

  const initializeTimer = () => {
    setTimer(
      setInterval(() => {
        setSecondsTimer(prevState => ({ seconds: prevState.seconds + 1, status: 'RUNNING' }));
      }, 1000),
    );
  };

  const pauseTimer = () => {
    if (secondsTimer.status === 'RUNNING') {
      clearInterval(timer!);
      setSecondsTimer(prevState => ({ ...prevState, ...{ status: 'PAUSE' } }));
    }
  };

  const stopTimer = () => {
    clearInterval(timer!);
    setSecondsTimer(prevState => ({ ...prevState, ...{ status: 'STOPPED' } }));
  };

  const addToTimer = () => {
    pauseTimer();
    setSecondsTimer(prevState => ({ seconds: prevState.seconds + 10, status: 'START_RUNNING' }));
  };

  const resetTimer = () => {
    clearInterval(timer!);
    setSecondsTimer({ seconds: 0, status: 'NOT_STARTED' });
  };

  const startTimer = () => setSecondsTimer({ seconds: 0, status: 'START_RUNNING' });

  useEffect(() => {
    return () => pauseTimer();
  }, []);

  return { seconds, stopTimer, addToTimer, startTimer, resetTimer };
};

export default useTimer;
