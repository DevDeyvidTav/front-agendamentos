import create, { State, SetState } from 'zustand';

interface ScheduleProps {
  date: string;
  name: string;
  phone: string;
  id: string;
}

interface NotificationState
 {
  schedules: ScheduleProps[];
  addNotification: (schedule: ScheduleProps) => void;
  deleteNotification: (id: string) => void;
  editNotification: (id: string, updatedSchedule: ScheduleProps) => void;
}

export const useStore = create<NotificationState>((set: SetState<NotificationState>) => ({
  schedules: [],
  addNotification: (schedule: ScheduleProps) =>
    set((state) => ({ schedules: [...state.schedules, schedule] })),
  deleteNotification: (id: string) =>
    set((state) => ({ schedules: state.schedules.filter((schedule) => schedule.id !== id) })),
  editNotification: (id: string, updatedSchedule: ScheduleProps) =>
    set((state) => ({
      schedules: state.schedules.map((schedule) => {
        if (schedule.id === id) {
          return { ...schedule, ...updatedSchedule };
        }
        return schedule;
      }),
    })),
}));
