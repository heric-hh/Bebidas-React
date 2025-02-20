import { StateCreator } from "zustand";

type Notification = {
  show: boolean;
  text: string;
  error: boolean;
};

export type NotificationSliceType = {
  notification: Notification;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType
> = () => ({
  notification: {
    text: "",
    show: false,
    error: false,
  },
});
