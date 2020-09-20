import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks';
import useTimer from 'hooks/useTimer';

describe('Testing useTimer hook', () => {
  let timer: RenderHookResult<
    unknown,
    {
      seconds: number;
      stopTimer: () => void;
      addToTimer: () => void;
      startTimer: () => void;
      resetTimer: () => void;
    }
  >;

  beforeEach(() => {
    timer = renderHook(() => useTimer());
  });

  afterEach(() => {
    act(() => timer.result.current.resetTimer());
  });

  it('Testing if in 5 seconds the time has not been started', () => {
    const { result } = timer;
    const { seconds } = result.current;
    setTimeout(() => {
      expect(seconds).toEqual(0);
    }, 5000);
  });
});
