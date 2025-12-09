/**
 * 时间选择面板
 */

import React, { useCallback, useState } from 'react';
import './TimePanel.css';

interface TimePanelProps {
  selectedTime?: Date | null;
  onTimeChange: (time: Date) => void;
  timeFormat?: '24h' | '12h';
}

const TimePanel: React.FC<TimePanelProps> = ({ selectedTime, onTimeChange, timeFormat = '24h' }) => {
  const [hours, setHours] = useState(selectedTime?.getHours() ?? 0);
  const [minutes, setMinutes] = useState(selectedTime?.getMinutes() ?? 0);
  const [seconds, setSeconds] = useState(selectedTime?.getSeconds() ?? 0);

  const maxHours = timeFormat === '24h' ? 23 : 11;

  const handleHoursChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Math.max(parseInt(e.target.value) || 0, 0), maxHours);
      setHours(value);
      updateTime(value, minutes, seconds);
    },
    [minutes, seconds]
  );

  const handleMinutesChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Math.max(parseInt(e.target.value) || 0, 0), 59);
      setMinutes(value);
      updateTime(hours, value, seconds);
    },
    [hours, seconds]
  );

  const handleSecondsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Math.max(parseInt(e.target.value) || 0, 0), 59);
      setSeconds(value);
      updateTime(hours, minutes, value);
    },
    [hours, minutes]
  );

  const updateTime = (h: number, m: number, s: number) => {
    const newTime = new Date(selectedTime || new Date());
    newTime.setHours(h, m, s);
    onTimeChange(newTime);
  };

  return (
    <div className="beaver-datepicker-time-panel">
      <div className="beaver-datepicker-time-input-group">
        <div className="beaver-datepicker-time-input">
          <input
            type="number"
            min="0"
            max={maxHours}
            value={String(hours).padStart(2, '0')}
            onChange={handleHoursChange}
          />
          <label>时</label>
        </div>
        <span className="beaver-datepicker-time-separator">:</span>
        <div className="beaver-datepicker-time-input">
          <input
            type="number"
            min="0"
            max="59"
            value={String(minutes).padStart(2, '0')}
            onChange={handleMinutesChange}
          />
          <label>分</label>
        </div>
        <span className="beaver-datepicker-time-separator">:</span>
        <div className="beaver-datepicker-time-input">
          <input
            type="number"
            min="0"
            max="59"
            value={String(seconds).padStart(2, '0')}
            onChange={handleSecondsChange}
          />
          <label>秒</label>
        </div>
      </div>
    </div>
  );
};

export default TimePanel;
